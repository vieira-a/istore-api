import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { ProductEntity } from '../entities';
import { ReadProductsService } from '../services';
import { productsResolvedMock } from '../__mocks__';

describe('CreateProductService', () => {
  let readProductService: ReadProductsService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        ReadProductsService,
        {
          provide: getRepositoryToken(ProductEntity),
          useValue: {
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    readProductService = app.get<ReadProductsService>(ReadProductsService);
  });

  it('should be defined', () => {
    expect(readProductService).toBeDefined();
  });

  it('should return an error if service throws', async () => {
    const readSpy = jest
      .spyOn(readProductService, 'read')
      .mockImplementation(() => {
        throw new Error();
      });

    expect(readSpy).toThrow();
  });

  it('should returns all products on success', async () => {
    jest
      .spyOn(readProductService, 'read')
      .mockResolvedValue(productsResolvedMock);

    const result = await readProductService.read();
    expect(result).toEqual(productsResolvedMock);
  });
});
