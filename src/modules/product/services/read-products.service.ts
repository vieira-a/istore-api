import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
  PageDto,
  PageMetaDto,
  PageOptionsDto,
} from '../../../modules/shared/dtos';
import { mapperDtoToEntityArrays } from '../../../modules/shared/helpers';
import { ProductDto, ProductFilterDto } from '../dtos';
import { ProductEntity } from '../entities';
import { ReadProductsUsecase } from '../interfaces';

@Injectable()
export class ReadProductsService implements ReadProductsUsecase {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly readProductsServiceRepository: Repository<ProductEntity>,
  ) {}
  async read(
    pageOptionsDto: PageOptionsDto,
    filters: ProductFilterDto,
  ): Promise<PageDto<ProductDto>> {
    const queryBuilder =
      this.readProductsServiceRepository.createQueryBuilder('products');

    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value) {
          queryBuilder.andWhere(`UPPER(products.${key}) LIKE UPPER(:${key})`, {
            [key]: `%${value}%`,
          });
        }
      });
    }

    queryBuilder.skip(pageOptionsDto.skip).take(pageOptionsDto.take);

    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();

    const pageMetaDto = new PageMetaDto({
      itemCount,
      pageOptionsDto,
    });

    return new PageDto(
      mapperDtoToEntityArrays(entities, ProductDto),
      pageMetaDto,
    );
  }
}
