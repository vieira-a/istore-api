import { Body, Controller, Param, ParseIntPipe, Patch } from '@nestjs/common';

import { updatedSuccess } from '../../../modules/shared/helpers';
import { UpdateProductDto } from '../dtos';
import { UpdateProductService } from '../services';

@Controller('product/update')
export class UpdateProductController {
  constructor(private readonly updateProductService: UpdateProductService) {}
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
