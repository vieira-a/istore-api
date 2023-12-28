import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../db/data-source';

import { ProductModule } from './modules/product/product.module';
import { CityModule } from './modules/city/city.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    ProductModule,
    CityModule,
  ],
  providers: [Logger],
})
export class AppModule {}
