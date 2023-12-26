import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { DataNotFoundException } from '../../../modules/shared/exceptions';
import {
  productMock,
  productResolvedMock,
  updateProductMock,
} from '../__mocks__';
import { ProductEntity } from '../entities';
import { ReadProductByIdService, UpdateProductService } from '../services';

describe('UpdateProductService', () => {
  let updateProductService: UpdateProductService;
  let readProductByIdService: ReadProductByIdService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        UpdateProductService,
        ReadProductByIdService,
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

    readProductByIdService = moduleRef.get<ReadProductByIdService>(
      ReadProductByIdService,
    );
  });

  it('should return an error if service throws', async () => {
    const updateSpy = jest
      .spyOn(updateProductService, 'update')
      .mockImplementation(() => {
        throw new Error();
      });

    expect(updateSpy).toThrow();
  });

  it('should return 404 if product does not exist', async () => {
    jest.spyOn(readProductByIdService, 'read').mockImplementation((id) => {
      if (id === productResolvedMock.id) {
        return Promise.resolve(productResolvedMock);
      } else {
        return Promise.resolve(null);
      }
    });

    await expect(
      updateProductService.update(11, productResolvedMock),
    ).rejects.toThrow(DataNotFoundException);
  });

  it('should update product on success', async () => {
    jest.spyOn(readProductByIdService, 'read').mockResolvedValue(productMock);
    const result = await updateProductService.update(1, updateProductMock);
    expect(result).toEqual(updateProductMock);
  });
});
