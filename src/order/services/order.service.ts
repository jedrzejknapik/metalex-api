import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../../typeorm/entities/Category';
import { Color } from '../../typeorm/entities/Color';
import { Customer } from '../../typeorm/entities/Customer';
import { Material } from '../../typeorm/entities/Material';
import { Order } from '../../typeorm/entities/Order';
import { Profile } from '../../typeorm/entities/Profile';
import { SheetMetalRoll } from '../../typeorm/entities/SheetMetalRoll';
import { Thickness } from '../../typeorm/entities/Thickness';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    @InjectRepository(Color)
    private readonly colorRepository: Repository<Color>,
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
    @InjectRepository(Material)
    private readonly materialRepository: Repository<Material>,
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
    @InjectRepository(SheetMetalRoll)
    private readonly rollRepository: Repository<SheetMetalRoll>,
    @InjectRepository(Thickness)
    private readonly thicknessRepository: Repository<Thickness>,
  ) {}

  findCategories() {
    return this.categoryRepository.find();
  }

  findColors() {
    return this.colorRepository.find();
  }

  findCustomers() {
    return this.customerRepository.find();
  }

  findMaterials() {
    return this.materialRepository.find();
  }

  findOrders() {
    return this.orderRepository.find();
  }

  findProfiles() {
    return this.profileRepository.find();
  }

  findRolls() {
    return this.rollRepository.find();
  }

  findThicknessValues() {
    return this.thicknessRepository.find();
  }
}
