import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'colors' })
export class Color {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  value: string;

  @Column({ nullable: true })
  imageRef: string;
}
