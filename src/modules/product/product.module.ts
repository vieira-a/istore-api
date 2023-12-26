import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  CreateProductController,
  ReadProductByIdController,
  ReadProductsController,
} from './controllers';
import { ProductEntity } from './entities/product.entity';
import {
  CreateProductService,
  ReadProductByIdService,
  ReadProductsService,
} from './services';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  providers: [
    CreateProductService,
    ReadProductsService,
    ReadProductByIdService,
  ],
  controllers: [
    CreateProductController,
    ReadProductsController,
    ReadProductByIdController,
  ],
})
export class ProductModule {}
