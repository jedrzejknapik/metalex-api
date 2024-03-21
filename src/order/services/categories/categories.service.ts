import { Injectable } from '@nestjs/common';
import { Category } from '../../../typeorm/entities/Category';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryParams } from '../../../utils/types';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  findCategories() {
    return this.categoryRepository.find();
  }

  findCategoryById(id: number) {
    return this.categoryRepository.findOne({ where: { id } });
  }

  createCategory(categoryDetails: CreateCategoryParams) {
    const newCategory = this.categoryRepository.create({
      ...categoryDetails,
    });

    return this.categoryRepository.save(newCategory);
  }
}
