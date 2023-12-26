import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ReadProductByIdService } from '../services';
import { DataNotFoundException } from '../../../modules/shared/exceptions';

@Controller('product')
export class ReadProductByIdController {
  constructor(
    private readonly readProductByIdService: ReadProductByIdService,
  ) {}

  @Get(':id')
  async read(@Param('id', ParseIntPipe) id: number) {
    const result = await this.readProductByIdService.read(id);

    if (!result) {
      throw new DataNotFoundException();
    }

    return result;
  }
}
