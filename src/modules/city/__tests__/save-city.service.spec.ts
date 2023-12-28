import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { CityEntity } from '../entities';
import { FetchCityService, SaveCityService } from '../services';
import { cityEntityMock } from '../__mocks__';

describe('SaveCityService', () => {
  let fetchCityService: FetchCityService;
  let service: SaveCityService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        FetchCityService,
        SaveCityService,
        {
          provide: getRepositoryToken(CityEntity),
          useValue: {
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    service = moduleRef.get<SaveCityService>(SaveCityService);
    fetchCityService = moduleRef.get<FetchCityService>(FetchCityService);
  });

  it('should save new cities on success', async () => {
    jest.spyOn(fetchCityService, 'fetch').mockResolvedValue(null);
    jest.spyOn(service, 'save').mockResolvedValue(cityEntityMock);
    const result = await service.save();
    expect(result).toEqual(cityEntityMock);
  });
});
