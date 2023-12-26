import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { DataNotFoundException } from '../../../modules/shared/exceptions';
import { ReadProductByIdService } from './read-product-by-id.service';
import { ProductEntity } from '../entities';
import { DeleteProductUsecase } from '../interfaces';

@Injectable()
export class DeleteProductService implements DeleteProductUsecase {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly deleteProductServiceRepository: Repository<ProductEntity>,
    private readonly readProductByIdService: ReadProductByIdService,
  ) {}
  async delete(productId: number) {
    const productExists = await this.readProductByIdService.read(productId);

    if (!productExists) {
      throw new DataNotFoundException('Produto');
    }
    return await this.deleteProductServiceRepository.delete(productId);
  }
}
