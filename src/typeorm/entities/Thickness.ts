import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'thickness_values' })
export class Thickness {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  value: number;
}
