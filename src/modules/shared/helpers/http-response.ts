import { HttpStatus } from '@nestjs/common';

export const registerSuccess = () => {
  return {
    status: HttpStatus.CREATED,
    body: {
      message: 'Cadastrado com sucesso',
    },
  };
};
