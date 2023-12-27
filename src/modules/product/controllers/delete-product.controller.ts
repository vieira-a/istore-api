import { Controller, Delete, Param, ParseIntPipe } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
} from '@nestjs/swagger';

import { deletedSuccess } from '../../../modules/shared/helpers';
import { DeleteProductService } from '../services';

@Controller('product')
export class DeleteProductController {
  constructor(private readonly deleteProductService: DeleteProductService) {}

  @ApiOkResponse({
    description: 'Excluído com sucesso',
  })
  @ApiNotFoundResponse({
    description: 'Dados não encontrados: Produto',
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
  })
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const result = await this.deleteProductService.delete(id);
    if (result.affected === 1) {
      return deletedSuccess();
    }
  }
}
