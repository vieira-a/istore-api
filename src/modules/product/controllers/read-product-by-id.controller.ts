import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ReadProductByIdService } from '../services';

@Controller('product')
export class ReadProductByIdController {
  constructor(
    private readonly readProductByIdService: ReadProductByIdService,
  ) {}

  @Get(':id')
  async read(@Param('id', ParseIntPipe) id: number) {
    return await this.readProductByIdService.read(id);
  }
}
