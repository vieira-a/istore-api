import { plainToClass } from 'class-transformer';

export function mapperDtoToEntity<DTO, Entity>(
  dto: DTO,
  entityClass: new () => Entity,
): Entity {
  const entity = plainToClass(entityClass, dto);
  return entity;
}
