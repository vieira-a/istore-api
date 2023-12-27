import { HttpStatus } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { cityEntityMock } from '../__mocks__';
import { FetchCityController } from '../controllers';
import { CityEntity } from '../entities';
import { FetchCityService, SaveCityService } from '../services';

describe('FetchCityController', () => {
  let controller: FetchCityController;
  let fetchCityService: FetchCityService;
  let service: SaveCityService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        SaveCityService,
        FetchCityService,
        FetchCityController,
        {
          provide: getRepositoryToken(CityEntity),
          useValue: {
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    fetchCityService = moduleRef.get<FetchCityService>(FetchCityService);
    service = moduleRef.get<SaveCityService>(SaveCityService);
    controller = moduleRef.get<FetchCityController>(FetchCityController);
  });

  it('should be return 201 on success', async () => {
    jest.spyOn(fetchCityService, 'fetch').mockResolvedValue(null);
    jest.spyOn(service, 'save').mockResolvedValue(cityEntityMock);
    const result = await controller.fetch();
    expect(result).toEqual({
      status: HttpStatus.CREATED,
      body: {
        message: 'Cadastrado com sucesso',
        data: cityEntityMock,
      },
    });
  });
});
