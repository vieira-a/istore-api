import { plainToClass } from 'class-transformer';

export function mapperDtoToEntityArrays<Entity, DTO>(
  array: Entity[],
  dtoClass: new (...args: any[]) => DTO,
): DTO[] {
  return array.map((data) => plainToClass(dtoClass, data));
}
