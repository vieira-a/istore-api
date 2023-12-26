import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { productResolvedMock } from '../__mocks__';
import { ProductEntity } from '../entities';
import { DeleteProductService, ReadProductByIdService } from '../services';

describe('DeleteProductService', () => {
  let readProductByIdService: ReadProductByIdService;
  let service: DeleteProductService;
  let repository: Repository<ProductEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DeleteProductService,
        ReadProductByIdService,
        {
          provide: getRepositoryToken(ProductEntity),
          useClass: Repository,
        },
        {
          provide: ReadProductByIdService,
          useValue: {
            read: jest.fn(),
          },
        },
      ],
    }).compile();

    readProductByIdService = module.get<ReadProductByIdService>(
      ReadProductByIdService,
    );
    service = module.get<DeleteProductService>(DeleteProductService);
    repository = module.get<Repository<ProductEntity>>(
      getRepositoryToken(ProductEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should delete a product by id if it exists', async () => {
    const productId = 1;
    jest
      .spyOn(readProductByIdService, 'read')
      .mockResolvedValue(productResolvedMock);
    jest
      .spyOn(repository, 'delete')
      .mockResolvedValue({ raw: { effected: 1 } });

    const result = await service.delete(productId);

    expect(result).toEqual({ raw: { effected: 1 } });
    expect(repository.delete).toHaveBeenCalledWith(productId);
  });
});
