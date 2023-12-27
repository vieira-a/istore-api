import { HttpException, HttpStatus } from '@nestjs/common';

export class ConflitContentException extends HttpException {
  constructor() {
    super('Dados já cadastrados', HttpStatus.CONFLICT);
  }
}
