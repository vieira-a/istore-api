import { CityEntity } from '../entities/city.entity';

export interface FetchCityUsecase {
  fetch: () => Promise<CityEntity[]>;
}
