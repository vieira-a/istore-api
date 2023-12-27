import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
  PageDto,
  PageMetaDto,
  PageOptionsDto,
} from '../../../modules/shared/dtos';
import { ProductDto } from '../dtos';
import { ProductEntity } from '../entities';
import { mapDtoProduct } from '../helpers/map-to-product';

//import { ReadProductsUsecase } from '../interfaces';
//import { mapperDtoToEntityArrays } from '../../../modules/shared/helpers';
@Injectable()
export class ReadProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly readProductsServiceRepository: Repository<ProductEntity>,
  ) {}
  async read(pageOptionsDto: PageOptionsDto): Promise<PageDto<ProductDto>> {
    const queryBuilder =
      this.readProductsServiceRepository.createQueryBuilder('products');

    queryBuilder.skip(pageOptionsDto.skip).take(pageOptionsDto.take);

    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();

    const pageMetaDto = new PageMetaDto({
      itemCount,
      pageOptionsDto,
    });

    return new PageDto(mapDtoProduct(entities), pageMetaDto);
  }
}
