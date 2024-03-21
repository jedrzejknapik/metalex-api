import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../../../typeorm/entities/Product';
import { Repository } from 'typeorm';
import { CreateProductParams } from '../../../utils/types';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  findProducts() {
    return this.productRepository.find();
  }

  findProductsByCategoryId(categoryId: number) {
    return this.productRepository.findBy({ category: { id: categoryId } });
  }

  createProduct(productDetails: CreateProductParams) {
    return this.productRepository.save({ ...productDetails });
  }
}
