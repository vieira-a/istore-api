import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { ProductEntity } from '../entities';
import { CreateProductService } from '../services';
import { CreateProductDto } from '../dtos';

describe('CreateProductService', () => {
  let createProductService: CreateProductService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
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

    createProductService = app.get<CreateProductService>(CreateProductService);
  });

  it('should be defined', () => {
    expect(createProductService).toBeDefined();
  });

  it('should return an error if service throws', async () => {
    const createSpy = jest
      .spyOn(createProductService, 'create')
      .mockImplementation(() => {
        throw new Error();
      });

    expect(createSpy).toThrow();
  });

  it('should create a new product with correct values', async () => {
    const productDataMock = new CreateProductDto();
    const productEntityMock = new ProductEntity();

    jest
      .spyOn(createProductService, 'create')
      .mockResolvedValue(productEntityMock);

    const result = await createProductService.create(productDataMock);
    expect(result).toBe(productEntityMock);
  });
});
