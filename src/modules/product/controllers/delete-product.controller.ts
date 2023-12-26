import { Controller, Delete, Param, ParseIntPipe } from '@nestjs/common';

import { deletedSuccess } from '../../../modules/shared/helpers';
import { DeleteProductService } from '../services';

@Controller('product')
export class DeleteProductController {
  constructor(private readonly deleteProductService: DeleteProductService) {}

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const result = await this.deleteProductService.delete(id);
    if (result.affected === 1) {
      return deletedSuccess();
    }
  }
}
