import { Controller, Get, NotFoundException } from '@nestjs/common';

import { ReadProductsService } from '../services';

@Controller('products')
export class ReadProductsController {
  constructor(private readonly readProductsService: ReadProductsService) {}

  @Get()
  async read() {
    const result = await this.readProductsService.read();
    if (!result || result.length === 0) {
      throw new NotFoundException();
    }
    return result;
  }
}
