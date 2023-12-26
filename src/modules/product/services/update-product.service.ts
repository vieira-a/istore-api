import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UpdateProductDto } from '../dtos';
import { ProductEntity } from '../entities';
import { UpdateProductUsecase } from '../interfaces';

@Injectable()
export class UpdateProductService implements UpdateProductUsecase {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly updateProductServiceRepository: Repository<ProductEntity>,
  ) {}
  async update(productId: number, productData: UpdateProductDto) {
    return await this.updateProductServiceRepository.save({
      productId,
      ...productData,
    });
  }
}
