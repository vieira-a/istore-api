import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'cities' })
export class CityEntity {
  @PrimaryColumn()
  id: number;

  @Column({ name: 'name' })
  name: string;
}
