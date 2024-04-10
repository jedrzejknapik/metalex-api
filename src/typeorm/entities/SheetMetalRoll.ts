import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'sheet_metal_rolls' })
export class SheetMetalRoll {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
