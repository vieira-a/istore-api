import { Controller, Get, Query } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

import { PageOptionsDto } from '../../../modules/shared/dtos';
import { DataNotFoundException } from '../../../modules/shared/exceptions';
import { ProductDto, ProductFilterDto } from '../dtos';
import { ReadProductsService } from '../services';

@Controller('products')
@ApiTags('produtos')
export class ReadProductsController {
  constructor(private readonly readProductsService: ReadProductsService) {}

  @ApiOkResponse({
    type: [ProductDto],
  })
  @ApiNotFoundResponse({
    description: 'Dados não encontrados: Produtos',
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
  })
  @Get()
  async read(
    @Query() pageOptionsDto: PageOptionsDto,
    @Query() filters: ProductFilterDto,
  ) {
    const result = await this.readProductsService.read(pageOptionsDto, filters);
    if (!result) {
      throw new DataNotFoundException('Produtos');
    }
    return result;
  }
}
