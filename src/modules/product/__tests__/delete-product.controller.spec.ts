import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { deletedSuccess } from '../../../modules/shared/helpers';
import { DeleteProductController } from '../controllers';
import { ProductEntity } from '../entities';
import { DeleteProductService, ReadProductByIdService } from '../services';

describe('DeleteProductController', () => {
  let service: DeleteProductService;
  let controller: DeleteProductController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeleteProductController],
      providers: [
        DeleteProductService,
        ReadProductByIdService,
        {
          provide: getRepositoryToken(ProductEntity),
          useValue: {
            update: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<DeleteProductService>(DeleteProductService);
    controller = module.get<DeleteProductController>(DeleteProductController);
  });

  it('should throws an error if application throws', async () => {
    jest.spyOn(service, 'delete').mockRejectedValue(() => {
      throw new Error();
    });

    await expect(controller.delete(1)).rejects.toThrow(new Error());
  });

  it('should delete product by id', async () => {
    jest.spyOn(service, 'delete').mockResolvedValue({ raw: [], affected: 1 });

    const result = await controller.delete(1);
    expect(result).toEqual(deletedSuccess());
  });
});
