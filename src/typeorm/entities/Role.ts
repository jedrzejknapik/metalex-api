import { RoleEnum } from '../../utils/types';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@Entity({ name: 'roles' })
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: RoleEnum;

  @OneToMany(() => User, (user) => user.role)
  users: User[];
}
