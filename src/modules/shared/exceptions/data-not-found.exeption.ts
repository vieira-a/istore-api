import { HttpException, HttpStatus } from '@nestjs/common';

export class DataNotFoundException extends HttpException {
  constructor(data: string) {
    super(`Dados não encontrados: ${data}`, HttpStatus.NOT_FOUND);
  }
}
