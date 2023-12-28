import { ApiProperty } from '@nestjs/swagger';

export class CityDto {
  @ApiProperty({
    example: 3300100,
    description: 'Código identificador da cidade',
  })
  id: number;

  @ApiProperty({
    example: 'Angra dos Reis',
    description: 'Nome da cidade',
  })
  name: string;
}
