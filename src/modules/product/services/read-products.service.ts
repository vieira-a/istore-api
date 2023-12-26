import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProductEntity } from '../entities';
import { ReadProductsUsecase } from '../interfaces';
import { mapperDtoToEntityArrays } from '../../../modules/shared/helpers';

@Injectable()
export class ReadProductsService implements ReadProductsUsecase {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly readProductsServiceRepository: Repository<ProductEntity>,
  ) {}
  async read(): Promise<ProductEntity[]> {
    const products = await this.readProductsServiceRepository.find();
    return mapperDtoToEntityArrays(products, ProductEntity);
  }
}
