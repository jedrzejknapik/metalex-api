import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Customer } from './Customer';
import { OrderPosition } from './OrderPosition';

@Entity({ name: 'orders' })
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  orderNr: string;

  @Column()
  date: Date;

  // TODO: add order status table
  @Column()
  status: string;

  @OneToMany(() => OrderPosition, (orderPosition) => orderPosition.order)
  positions: OrderPosition[];

  @ManyToOne(() => Customer, (customer) => customer.orders)
  customer: Customer;
}
