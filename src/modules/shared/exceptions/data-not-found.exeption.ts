import { HttpException, HttpStatus } from '@nestjs/common';

export class DataNotFoundException extends HttpException {
  constructor() {
    super(`Dados não encontrados`, HttpStatus.NOT_FOUND);
  }
}
