import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { ProductEntity } from '../entities';
import { ReadProductByIdService } from '../services';
import { productResolvedMock } from '../__mocks__';

describe('CreateProductService', () => {
  let readProductByIdService: ReadProductByIdService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
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

    readProductByIdService = app.get<ReadProductByIdService>(
      ReadProductByIdService,
    );
  });

  it('should be defined', () => {
    expect(readProductByIdService).toBeDefined();
  });

  it('should returns product by id on success', async () => {
    jest.spyOn(readProductByIdService, 'read').mockImplementationOnce((id) => {
      if (id === productResolvedMock.id) {
        return Promise.resolve(productResolvedMock);
      }
    });

    const result = await readProductByIdService.read(1);
    expect(result).toBe(productResolvedMock);
  });
});
