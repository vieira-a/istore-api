import { Body, Controller, Post } from '@nestjs/common';

import { registerSuccess } from '../../../modules/shared/helpers';
import { ProductDto } from '../dtos';
import { CreateProductService } from '../services';
import {
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
} from '@nestjs/swagger';

@Controller('product/register')
export class CreateProductController {
  constructor(private readonly createProductService: CreateProductService) {}

  @ApiCreatedResponse({
    description: 'Cadastrado com sucesso',
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
  })
  @Post()
  async create(@Body() productData: ProductDto) {
    const result = await this.createProductService.create(productData);

    if (result) {
      return registerSuccess();
    }
  }
}
