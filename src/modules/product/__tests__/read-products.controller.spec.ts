import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { DataNotFoundException } from '../../../modules/shared/exceptions';
import {
  pageDtoMock,
  pageOptionDtoMock,
  productFiltersDtoMock,
} from '../__mocks__';
import { ReadProductsController } from '../controllers';
import { ProductEntity } from '../entities';
import { ReadProductsService } from '../services';

describe('ReadProductsController', () => {
  let service: ReadProductsService;
  let controller: ReadProductsController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReadProductsController],
      providers: [
        ReadProductsService,
        {
          provide: getRepositoryToken(ProductEntity),
          useValue: {
            read: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ReadProductsService>(ReadProductsService);
    controller = module.get<ReadProductsController>(ReadProductsController);
  });

  it('should throws an error if application throws', async () => {
    jest.spyOn(service, 'read').mockRejectedValue(() => {
      throw new Error();
    });

    await expect(
      controller.read(pageOptionDtoMock, productFiltersDtoMock),
    ).rejects.toThrow(new Error());
  });

  it('should return 404 if not found products', async () => {
    jest.spyOn(service, 'read').mockResolvedValueOnce(undefined);

    await expect(
      controller.read(pageOptionDtoMock, productFiltersDtoMock),
    ).rejects.toThrow(DataNotFoundException);
  });

  it('should return all products on success', async () => {
    jest.spyOn(service, 'read').mockResolvedValue(pageDtoMock);
    const result = await controller.read(
      pageOptionDtoMock,
      productFiltersDtoMock,
    );
    expect(result).toBe(pageDtoMock);
  });
});
