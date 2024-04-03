import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoriesService } from '../../services/categories/categories.service';
import { CreateCategoryParams } from '../../../utils/types';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Order')
@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  getCategories() {
    return this.categoriesService.findCategories();
  }

  @Post()
  createCategory(@Body() createCategoryDto: CreateCategoryParams) {
    return this.categoriesService.createCategory(createCategoryDto);
  }
}
