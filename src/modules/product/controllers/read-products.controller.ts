import { Controller, Get, Query } from '@nestjs/common';

import { PageOptionsDto } from '../../../modules/shared/dtos';
import { DataNotFoundException } from '../../../modules/shared/exceptions';
import { ReadProductsService } from '../services';

@Controller('products')
export class ReadProductsController {
  constructor(private readonly readProductsService: ReadProductsService) {}

  @Get()
  async read(@Query() pageOptionsDto: PageOptionsDto) {
    const result = await this.readProductsService.read(pageOptionsDto);
    if (!result) {
      throw new DataNotFoundException('Produtos');
    }
    return result;
  }
}
