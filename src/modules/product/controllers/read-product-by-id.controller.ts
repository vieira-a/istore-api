import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
} from '@nestjs/swagger';

import { DataNotFoundException } from '../../../modules/shared/exceptions';
import { ReadProductByIdService } from '../services';
import { ProductDto } from '../dtos';

@Controller('product')
export class ReadProductByIdController {
  constructor(
    private readonly readProductByIdService: ReadProductByIdService,
  ) {}

  @ApiOkResponse({
    type: ProductDto,
  })
  @ApiNotFoundResponse({
    description: 'Dados não encontrados: Produto',
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
  })
  @Get(':id')
  async read(@Param('id', ParseIntPipe) id: number) {
    const result = await this.readProductByIdService.read(id);

    if (!result) {
      throw new DataNotFoundException('Produto');
    }

    return result;
  }
}
