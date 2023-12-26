import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { productEntityMock, updateProductMock } from '../__mocks__';
import { UpdateProductController } from '../controllers';
import { ProductEntity } from '../entities';
import { UpdateProductService, ReadProductByIdService } from '../services';
import { updatedSuccess } from '../../../modules/shared/helpers';

describe('CreateProductController', () => {
  let service: UpdateProductService;
  let controller: UpdateProductController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdateProductController],
      providers: [
        UpdateProductService,
        ReadProductByIdService,
        {
          provide: getRepositoryToken(ProductEntity),
          useValue: {
            update: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<UpdateProductService>(UpdateProductService);
    controller = module.get<UpdateProductController>(UpdateProductController);
  });

  it('should update product on success', async () => {
    jest.spyOn(service, 'update').mockResolvedValue(productEntityMock);

    const result = await controller.update(1, updateProductMock);
    expect(result).toEqual(updatedSuccess());
  });
});
