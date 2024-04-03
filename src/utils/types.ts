import { Category } from '../typeorm/entities/Category';

export type CreateUserParams = {
  username: string;
  password: string;
};

export type UpdateUserParams = {
  username: string;
  password: string;
};

export type CreateCategoryParams = {
  name: string;
  imageRef: string;
};

export type CreateProductParams = {
  name: string;
  imageRef: string;
  category: Category;
};

export enum RoleEnum {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export type CreateRoleParams = {
  name: RoleEnum;
};
