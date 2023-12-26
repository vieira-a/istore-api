import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  CreateProductController,
  ReadProductByIdController,
  ReadProductsController,
  UpdateProductController,
} from './controllers';
import { ProductEntity } from './entities/product.entity';
import {
  CreateProductService,
  ReadProductByIdService,
  ReadProductsService,
  UpdateProductService,
} from './services';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  providers: [
    CreateProductService,
    ReadProductsService,
    ReadProductByIdService,
    UpdateProductService,
  ],
  controllers: [
    CreateProductController,
    ReadProductsController,
    ReadProductByIdController,
    UpdateProductController,
  ],
})
export class ProductModule {}
