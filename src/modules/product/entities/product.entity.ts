import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { RegisterStatus } from '../../shared/enums';

@Entity({ name: 'products' })
export class ProductEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'name', length: 60, nullable: false })
  name: string;

  @Column({ name: 'category', length: 30, nullable: false })
  category: string;

  @Column({
    name: 'status',
    length: 8,
    nullable: false,
    default: RegisterStatus.ACTIVE,
  })
  status: string;

  @Column({ name: 'quantity', nullable: false })
  quantity: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
  deletedAt: Date;
}
