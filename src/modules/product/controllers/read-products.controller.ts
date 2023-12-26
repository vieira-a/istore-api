import { Controller, Get } from '@nestjs/common';

import { DataNotFoundException } from '../../../modules/shared/exceptions';
import { ReadProductsService } from '../services';

@Controller('products')
export class ReadProductsController {
  constructor(private readonly readProductsService: ReadProductsService) {}

  @Get()
  async read() {
    const result = await this.readProductsService.read();
    if (!result || result.length === 0) {
      throw new DataNotFoundException('Produtos');
    }
    return result;
  }
}
