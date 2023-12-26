import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: 'Nome do produto é obrigatório' })
  name: string;

  @IsNotEmpty({ message: 'Categoria do produto é obrigatório' })
  category: string;

  @IsNotEmpty({ message: 'Quantidade do produto é obrigatório' })
  quantity: number;

  createdAt: Date;

  updatedAt: Date;

  @IsOptional()
  deletedAt: Date;
}
