import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CityEntity } from '../entities';
import { Repository } from 'typeorm';
import { FetchCityService } from './fetch-city.service';

@Injectable()
export class SaveCityService {
  constructor(
    @InjectRepository(CityEntity)
    private readonly saveCityServiceRepository: Repository<CityEntity>,
    private readonly fetchCityService: FetchCityService,
  ) {}

  async save() {
    const cities = await this.fetchCityService.fetch();
    for (const city of cities) {
      const existingCity = await this.saveCityServiceRepository.findOne({
        where: { id: city.id },
      });

      if (!existingCity) {
        return await this.saveCityServiceRepository.save(city);
      }
    }
  }
}
