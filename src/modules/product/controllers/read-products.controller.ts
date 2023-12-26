import { Controller, Get } from '@nestjs/common';

import { ReadProductsService } from '../services';

@Controller('products')
export class ReadProductsController {
  constructor(private readonly readProductsService: ReadProductsService) {}

  @Get()
  async read() {
    return await this.readProductsService.read();
  }
}
