import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { OrderPosition } from './OrderPosition';

@Entity({ name: 'order_sheets' })
export class OrderSheet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  quantity: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  meters: number;

  @Column()
  isFoiled: boolean;

  @ManyToOne(() => OrderPosition)
  orderPosition: OrderPosition;
}
