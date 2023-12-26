import { Test, TestingModule } from '@nestjs/testing';
import { DeleteProductService } from '../services';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from '../entities';

describe('DeleteProductService', () => {
  let service: DeleteProductService;
  let repository: Repository<ProductEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DeleteProductService,
        {
          provide: getRepositoryToken(ProductEntity),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<DeleteProductService>(DeleteProductService);
    repository = module.get<Repository<ProductEntity>>(
      getRepositoryToken(ProductEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should delete a product by id', async () => {
    const productId = 1;
    jest
      .spyOn(repository, 'delete')
      .mockResolvedValue({ raw: { effected: 1 } });

    const result = await service.delete(productId);

    expect(result).toEqual({ raw: { effected: 1 } });
    expect(repository.delete).toHaveBeenCalledWith(productId);
  });
});
