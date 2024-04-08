import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrderPosition } from './OrderPosition';

@Entity({ name: 'sheet_metal_rolls' })
export class SheetMetalRoll {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => OrderPosition, (orderPosition) => orderPosition.roll)
  orderPositions: OrderPosition[];
}
