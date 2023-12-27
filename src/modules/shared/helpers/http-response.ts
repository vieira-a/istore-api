import { HttpStatus } from '@nestjs/common';

export const registerSuccess = (data?: any) => {
  return {
    status: HttpStatus.CREATED,
    body: {
      message: 'Cadastrado com sucesso',
      data,
    },
  };
};

export const updatedSuccess = () => {
  return {
    status: HttpStatus.OK,
    body: {
      message: 'Atualizado com sucesso',
    },
  };
};

export const deletedSuccess = () => {
  return {
    status: HttpStatus.OK,
    body: {
      message: 'Excluído com sucesso',
    },
  };
};
