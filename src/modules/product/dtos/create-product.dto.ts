import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class ProductDto {
  @ApiProperty({
    example: 'Sabre de luz',
    description: 'Nome descritivo para o produto',
  })
  @IsNotEmpty({ message: 'Nome do produto é obrigatório' })
  name: string;

  @ApiProperty({
    example: 'Espadas',
    description: 'Categoria do produto',
  })
  @IsNotEmpty({ message: 'Categoria do produto é obrigatório' })
  category: string;

  @ApiProperty({
    example: 10,
    description: 'Quantidade do produto',
  })
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
