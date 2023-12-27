import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FetchCityController } from './controllers';
import { CityEntity } from './entities';
import { FetchCityService, SaveCityService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([CityEntity])],
  providers: [FetchCityService, SaveCityService],
  controllers: [FetchCityController],
})
export class CityModule {}
