import { Injectable } from '@nestjs/common';

import { fetchApiHelper } from '../../../modules/shared/helpers/fetch-api.helper';
import { CityEntity } from '../entities/city.entity';
import { mapCity } from '../helpers';
import { FetchCityUsecase } from '../interfaces';

@Injectable()
export class FetchCityService implements FetchCityUsecase {
  private cityUrl =
    'https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/municipios';

  async fetch(): Promise<CityEntity[]> {
    const promises = [];

    promises.push(await fetchApiHelper(this.cityUrl));
    const allCitiesData = await Promise.all(promises);
    const result = allCitiesData.reduce((acc, data) => {
      const mappedData = mapCity(data);
      return [...acc, ...mappedData];
    }, []);

    return result;
  }
}
