import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './Order';

@Entity({ name: 'customers' })
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  address: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @Column()
  isCompany: boolean;

  @Column()
  nip: string;

  @Column()
  companyName: string;

  @OneToMany(() => Order, (order) => order.customer)
  orders: Order[];
}
