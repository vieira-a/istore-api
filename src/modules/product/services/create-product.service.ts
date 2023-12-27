import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProductDto } from '../dtos';
import { ProductEntity } from '../entities';
import { CreateProductUsecase } from '../interfaces';

@Injectable()
export class CreateProductService implements CreateProductUsecase {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly createProductService: Repository<ProductEntity>,
  ) {}
  async create(productData: ProductDto): Promise<ProductEntity> {
    return await this.createProductService.save(productData);
  }
}
