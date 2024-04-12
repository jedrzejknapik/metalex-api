import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Customer } from './Customer';

@Entity({ name: 'orders' })
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  orderNr: string;

  @Column()
  createdAt: Date;

  @Column()
  status: string;

  @Column()
  price: string;

  @Column()
  productQuantity: number;

  @ManyToOne(() => Customer)
  customer: Customer;
}
