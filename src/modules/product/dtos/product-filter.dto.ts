import { Allow, IsOptional } from 'class-validator';

export class ProductFilterDto {
  @IsOptional()
  @Allow()
  readonly name: string;

  @Allow()
  @IsOptional()
  readonly category: string;
}
