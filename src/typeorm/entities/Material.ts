import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'materials' })
export class Material {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;
}
