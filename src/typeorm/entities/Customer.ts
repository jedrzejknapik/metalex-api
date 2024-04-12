import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column({ nullable: true })
  email: string;

  @Column()
  phoneNumber: string;

  @Column({ nullable: true })
  nip: string;

  @Column({ nullable: true })
  companyName: string;

  @Column({ nullable: true })
  imageRef: string;
}
