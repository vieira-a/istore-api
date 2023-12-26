import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { DataNotFoundException } from '../../../modules/shared/exceptions';
import { productMock } from '../__mocks__';
import { ReadProductByIdController } from '../controllers';
import { ProductEntity } from '../entities';
import { ReadProductByIdService } from '../services';

describe('ReadProductsController', () => {
  let service: ReadProductByIdService;
  let controller: ReadProductByIdController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReadProductByIdController],
      providers: [
        ReadProductByIdService,
        {
          provide: getRepositoryToken(ProductEntity),
          useValue: {
            read: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ReadProductByIdService>(ReadProductByIdService);
    controller = module.get<ReadProductByIdController>(
      ReadProductByIdController,
    );
  });

  it('should return 404 if not found product', async () => {
    jest.spyOn(service, 'read').mockImplementationOnce((id) => {
      if (id === productMock.id) {
        return Promise.resolve(productMock);
      } else {
        return Promise.resolve(null);
      }
    });

    await expect(controller.read(2)).rejects.toThrow(DataNotFoundException);
  });

  it('should return a product on success', async () => {
    jest.spyOn(service, 'read').mockResolvedValue(productMock);
    const result = await controller.read(1);
    expect(result).toBe(productMock);
  });
});
