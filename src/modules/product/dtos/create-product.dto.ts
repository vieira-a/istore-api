import { Exclude } from 'class-transformer';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class ProductDto {
  @IsNotEmpty({ message: 'Nome do produto é obrigatório' })
  name: string;

  @IsNotEmpty({ message: 'Categoria do produto é obrigatório' })
  category: string;

  @IsNotEmpty({ message: 'Quantidade do produto é obrigatório' })
  quantity: number;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;

  @Exclude()
  @IsOptional()
  deletedAt: Date;
}
