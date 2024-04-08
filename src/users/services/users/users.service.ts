import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../../typeorm/entities/User';
import {
  CreateRoleParams,
  CreateUserParams,
  RoleEnum,
  UpdateUserParams,
} from '../../../utils/types';
import { Role } from '../../../typeorm/entities/Role';

@Injectable()
export class UsersService {
  // Inject typeORM repository

  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Role) private roleRepository: Repository<Role>,
  ) {}

  findUsers() {
    return this.userRepository.find();
  }

  async createUser(userDetails: CreateUserParams) {
    const userRole = (await this.findRoles()).find(
      (role) => role.name === RoleEnum.ADMIN,
    );
    const newUser = this.userRepository.create({
      ...userDetails,
      role: userRole,
    });

    return this.userRepository.save(newUser);
  }

  findByUsername(username: string) {
    return this.userRepository.findOne({
      where: { username },
      relations: ['role'],
    });
  }

  updateUser(id: number, updateUserDetails: UpdateUserParams) {
    return this.userRepository.update({ id }, { ...updateUserDetails });
  }

  deleteUser(id: number) {
    return this.userRepository.delete({ id });
  }

  findRoles() {
    return this.roleRepository.find();
  }

  createRole(roleDetails: CreateRoleParams) {
    const newRole = this.roleRepository.create(roleDetails);
    return this.roleRepository.save(newRole);
  }
}
