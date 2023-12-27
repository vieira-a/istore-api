import { Body, Controller, Post } from '@nestjs/common';

import { registerSuccess } from '../../../modules/shared/helpers';
import { ProductDto } from '../dtos';
import { CreateProductService } from '../services';

@Controller('product/register')
export class CreateProductController {
  constructor(private readonly createProductService: CreateProductService) {}
  @Post()
  async create(@Body() productData: ProductDto) {
    const result = await this.createProductService.create(productData);

    if (result) {
      return registerSuccess();
    }
  }
}
