import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { updateProductMock } from '../__mocks__';
import { ProductEntity } from '../entities';
import { UpdateProductService } from '../services';

describe('UpdateProductService', () => {
  let updateProductService: UpdateProductService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        UpdateProductService,
        {
          provide: getRepositoryToken(ProductEntity),
          useValue: {
            save: jest.fn().mockResolvedValue(updateProductMock),
          },
        },
      ],
    }).compile();

    updateProductService =
      moduleRef.get<UpdateProductService>(UpdateProductService);
  });

  it('should update product on success', async () => {
    const result = await updateProductService.update(1, updateProductMock);
    expect(result).toEqual(updateProductMock);
  });
});
