import { Body, Controller, Param, ParseIntPipe, Patch } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
} from '@nestjs/swagger';

import { updatedSuccess } from '../../../modules/shared/helpers';
import { UpdateProductDto } from '../dtos';
import { UpdateProductService } from '../services';

@Controller('product/update')
export class UpdateProductController {
  constructor(private readonly updateProductService: UpdateProductService) {}

  @ApiOkResponse({
    description: 'Atualizado com sucesso',
  })
  @ApiNotFoundResponse({
    description: 'Dados não encontrados: Produto',
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
  })
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() productData: UpdateProductDto,
  ) {
    const result = await this.updateProductService.update(id, productData);

    if (result) {
      return updatedSuccess();
    }
  }
}
