import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrderPosition } from './OrderPosition';

@Entity({ name: 'materials' })
export class Material {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => OrderPosition, (orderPosition) => orderPosition.material)
  orderPositions: OrderPosition[];
}
