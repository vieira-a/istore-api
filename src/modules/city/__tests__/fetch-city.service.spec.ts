import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { CityEntity } from '../entities';
import { FetchCityService } from '../services';

import { cityEntityMock } from '../__mocks__';

describe('FetchCityService', () => {
  let service: FetchCityService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        FetchCityService,
        {
          provide: getRepositoryToken(CityEntity),
          useValue: {
            fetch: jest.fn(),
          },
        },
      ],
    }).compile();

    service = moduleRef.get<FetchCityService>(FetchCityService);
  });

  it('should be return array of cities', async () => {
    jest.spyOn(service, 'fetch').mockResolvedValue([cityEntityMock]);
    const result = await service.fetch();
    expect(result).toEqual([cityEntityMock]);
  });
});
