import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CreateProductController } from './controllers';
import { ProductEntity } from './entities/product.entity';
import { CreateProductService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  providers: [CreateProductService],
  controllers: [CreateProductController],
})
export class ProductModule {}
