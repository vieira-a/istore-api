import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  CreateProductController,
  ReadProductByIdController,
  ReadProductsController,
  UpdateProductController,
  DeleteProductController,
} from './controllers';
import { ProductEntity } from './entities';
import {
  CreateProductService,
  ReadProductByIdService,
  ReadProductsService,
  UpdateProductService,
  DeleteProductService,
} from './services';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  providers: [
    CreateProductService,
    ReadProductsService,
    ReadProductByIdService,
    UpdateProductService,
    DeleteProductService,
  ],
  controllers: [
    CreateProductController,
    ReadProductsController,
    ReadProductByIdController,
    UpdateProductController,
    DeleteProductController,
  ],
})
export class ProductModule {}
