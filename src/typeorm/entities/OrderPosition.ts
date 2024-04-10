import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './Order';
import { Thickness } from './Thickness';
import { Color } from './Color';
import { SheetMetalRoll } from './SheetMetalRoll';
import { Material } from './Material';
import { Profile } from './Profile';

@Entity({ name: 'order_positions' })
export class OrderPosition {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Profile)
  profile: Profile;

  @ManyToOne(() => Thickness)
  thickness: Thickness;

  @Column()
  width: number;

  @ManyToOne(() => Color)
  color: Color;

  @Column()
  isGlossy: boolean;

  @Column()
  isDoubleSided: boolean;

  @Column()
  isFirstClass: boolean;

  @ManyToOne(() => SheetMetalRoll)
  roll: SheetMetalRoll;

  @ManyToOne(() => Material)
  material: Material;

  @ManyToOne(() => Order)
  order: Order;
}
