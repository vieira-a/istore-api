import { Controller, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { DeleteProductService } from '../services';

@Controller('product')
export class DeleteProductController {
  constructor(private readonly deleteProductService: DeleteProductService) {}

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.deleteProductService.delete(id);
  }
}
