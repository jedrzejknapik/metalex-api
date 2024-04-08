import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrderPosition } from './OrderPosition';

@Entity({ name: 'profiles' })
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => OrderPosition, (orderPosition) => orderPosition.profile)
  orderPositions: OrderPosition[];
}
