import { IsEnum, IsOptional } from 'class-validator';

import { PageOrder } from '../enums';

export class PageOptionsDto {
  @IsEnum(PageOrder)
  readonly order?: PageOrder = PageOrder.ASC;

  @IsOptional()
  readonly page?: number = 1;

  @IsOptional()
  readonly take?: number = 10;

  get skip(): number {
    return (this.page - 1) * this.take;
  }
}
