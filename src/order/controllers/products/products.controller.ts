import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ProductsService } from '../../services/products/products.service';
import { CategoriesService } from '../../services/categories/categories.service';
import { CreateProductDto } from '../../dtos/CreateProductDto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Order')
@Controller('products')
export class ProductsController {
  constructor(
    private productsService: ProductsService,
    private categoriesService: CategoriesService,
  ) {}

  @Get()
  getProducts() {
    return this.productsService.findProducts();
  }

  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto) {
    const category = await this.categoriesService.findCategoryById(
      createProductDto.categoryId,
    );

    if (!category) {
      throw new HttpException('Category not found.', HttpStatus.NOT_FOUND);
    }

    const { name, imageRef } = createProductDto;
    return await this.productsService.createProduct({
      name,
      imageRef,
      category,
    });
  }

  @Get('by-category/:id')
  getProductsByCategoryId(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findProductsByCategoryId(id);
  }
}
