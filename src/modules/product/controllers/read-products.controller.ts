import { Controller, Get, Query } from '@nestjs/common';

import { PageOptionsDto } from '../../../modules/shared/dtos';
import { DataNotFoundException } from '../../../modules/shared/exceptions';
import { ReadProductsService } from '../services';
import {
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiInternalServerErrorResponse,
} from '@nestjs/swagger';
import { ProductDto } from '../dtos';

@Controller('products')
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
  async read(@Query() pageOptionsDto: PageOptionsDto) {
    const result = await this.readProductsService.read(pageOptionsDto);
    if (!result) {
      throw new DataNotFoundException('Produtos');
    }
    return result;
  }
}
