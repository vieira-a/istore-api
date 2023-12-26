import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UpdateProductDto } from '../dtos';
import { ProductEntity } from '../entities';
import { UpdateProductUsecase } from '../interfaces';
import { ReadProductByIdService } from './read-product-by-id.service';
import { DataNotFoundException } from '../../../modules/shared/exceptions';

@Injectable()
export class UpdateProductService implements UpdateProductUsecase {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly updateProductServiceRepository: Repository<ProductEntity>,
    private readonly readProductByIdService: ReadProductByIdService,
  ) {}
  async update(productId: number, productData: UpdateProductDto) {
    const productExists = await this.readProductByIdService.read(productId);

    if (!productExists) {
      throw new DataNotFoundException();
    }

    return await this.updateProductServiceRepository.save({
      id: productId,
      ...productData,
    });
  }
}
