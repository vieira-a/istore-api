import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { registerSuccess } from '../../../modules/shared/helpers';
import { productDataMock, productEntityMock } from '../__mocks__';
import { CreateProductController } from '../controllers/create-product.controller';
import { ProductEntity } from '../entities';
import { CreateProductService } from '../services';

describe('CreateProductController', () => {
  let service: CreateProductService;
  let controller: CreateProductController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateProductController],
      providers: [
        CreateProductService,
        {
          provide: getRepositoryToken(ProductEntity),
          useValue: {
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<CreateProductService>(CreateProductService);
    controller = module.get<CreateProductController>(CreateProductController);
  });

  it('should throws an error if application throws', async () => {
    jest.spyOn(service, 'create').mockRejectedValue(() => {
      throw new Error();
    });

    await expect(controller.create(productDataMock)).rejects.toThrow(
      new Error(),
    );
  });

  it('should return 200 on success', async () => {
    jest.spyOn(service, 'create').mockResolvedValue(productEntityMock);

    const result = await controller.create(productDataMock);
    expect(result).toEqual(registerSuccess());
  });
});
