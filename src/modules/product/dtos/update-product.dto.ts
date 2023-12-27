import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class UpdateProductDto {
  @ApiProperty({
    example: 'Sabre de luz',
    description: 'Nome descritivo para o produto',
  })
  @IsOptional()
  name: string;

  @ApiProperty({
    example: 'Espadas',
    description: 'Categoria do produto',
  })
  @IsOptional()
  category: string;

  @ApiProperty({
    example: 'active | inactive',
    description: 'Status do produto',
  })
  @IsOptional()
  status: string;

  @ApiProperty({
    example: 10,
    description: 'Quantidade do produto',
  })
  @IsOptional()
  quantity: number;
}
