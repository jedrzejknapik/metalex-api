import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './Order';
import { Category } from './Category';
import { Thickness } from './Thickness';
import { Color } from './Color';
import { SheetMetalRoll } from './SheetMetalRoll';
import { Material } from './Material';
import { Profile } from './Profile';

@Entity({ name: 'order_positions' })
export class OrderPosition {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Category, (category) => category.orderPositions)
  category: Category;

  @ManyToOne(() => Profile, (profile) => profile.orderPositions)
  profile: Category;

  @ManyToOne(() => Thickness, (thickness) => thickness.orderPositions)
  thickness: Thickness;

  @Column()
  width: number;

  @ManyToOne(() => Color, (color) => color.orderPositions)
  color: Color;

  @Column()
  isGlossy: boolean;

  @Column()
  isDoubleSided: boolean;

  @Column()
  isFirstClass: boolean;

  @Column()
  isEmbossedProfileWithoutFoil: boolean;

  @ManyToOne(() => SheetMetalRoll, (roll) => roll.orderPositions)
  roll: SheetMetalRoll;

  @ManyToOne(() => Material, (material) => material.orderPositions)
  material: Material;

  @Column()
  orderDate: Date;

  // relation with order
  @ManyToOne(() => Order, (order) => order.positions)
  order: Order;
}
