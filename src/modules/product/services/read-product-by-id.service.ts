import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { mapperDtoToEntity } from '../../../modules/shared/helpers';
import { ProductEntity } from '../entities';
import { ReadProductByIdUsecase } from '../interfaces';

@Injectable()
export class ReadProductByIdService implements ReadProductByIdUsecase {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly readProductByIdServiceRepository: Repository<ProductEntity>,
  ) {}
  async read(productId: number): Promise<ProductEntity> {
    const product = await this.readProductByIdServiceRepository.findOne({
      where: { id: productId },
    });
    return mapperDtoToEntity(product, ProductEntity);
  }
}
