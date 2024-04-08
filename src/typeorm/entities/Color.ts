import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrderPosition } from './OrderPosition';

@Entity({ name: 'colors' })
export class Color {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  value: string;

  @Column({ nullable: true })
  imageRef: string;

  @OneToMany(() => OrderPosition, (orderPosition) => orderPosition.color)
  orderPositions: OrderPosition[];
}
