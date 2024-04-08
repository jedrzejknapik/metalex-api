import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrderPosition } from './OrderPosition';

@Entity({ name: 'thickness_values' })
export class Thickness {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  value: number;

  @OneToMany(() => OrderPosition, (orderPosition) => orderPosition.thickness)
  orderPositions: OrderPosition[];
}
