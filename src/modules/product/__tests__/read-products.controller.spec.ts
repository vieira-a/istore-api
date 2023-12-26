import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { productsResolvedMock } from '../__mocks__';
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

  it('should return all products on success', async () => {
    jest.spyOn(service, 'read').mockResolvedValue(productsResolvedMock);
    const result = await controller.read();
    expect(result).toBe(productsResolvedMock);
  });
});
