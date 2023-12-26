import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProductEntity } from '../entities';
import { DeleteProductUsecase } from '../interfaces';

@Injectable()
export class DeleteProductService implements DeleteProductUsecase {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly deleteProductServiceRepository: Repository<ProductEntity>,
  ) {}
  async delete(productId: number) {
    return await this.deleteProductServiceRepository.delete(productId);
  }
}
