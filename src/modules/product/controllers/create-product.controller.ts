import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiTags,
} from '@nestjs/swagger';

import { registerSuccess } from '../../../modules/shared/helpers';
import { ProductDto } from '../dtos';
import { CreateProductService } from '../services';

@Controller('product/register')
@ApiTags('produtos')
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
