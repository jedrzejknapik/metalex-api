import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Customer } from './Customer';

@Entity({ name: 'orders' })
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  orderNr: string;

  @Column()
  date: Date;

  @Column()
  status: string;

  @ManyToOne(() => Customer)
  customer: Customer;
}
