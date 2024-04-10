import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Color } from './typeorm/entities/Color';
import { Category } from './typeorm/entities/Category';
import { Customer } from './typeorm/entities/Customer';
import { Material } from './typeorm/entities/Material';
import { Order } from './typeorm/entities/Order';
import { Profile } from './typeorm/entities/Profile';
import { Role } from './typeorm/entities/Role';
import { SheetMetalRoll } from './typeorm/entities/SheetMetalRoll';
import { Thickness } from './typeorm/entities/Thickness';
import {
  CATEGORIES_SEED,
  COLORS_SEED,
  CUSTOMERS_SEED,
  MATERIALS_SEED,
  PROFILES_SEED,
  ROLES_SEED,
  ROLLS_SEED,
  THICKNESSES_SEED,
} from './constants/seed.constant';
import { OrderSheet } from './typeorm/entities/OrderSheets';
import { OrderPosition } from './typeorm/entities/OrderPosition';

@Injectable()
export class AppService {
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
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
    @InjectRepository(SheetMetalRoll)
    private readonly rollRepository: Repository<SheetMetalRoll>,
    @InjectRepository(Thickness)
    private readonly thicknessRepository: Repository<Thickness>,
    @InjectRepository(OrderSheet)
    private readonly orderSheetRepository: Repository<OrderSheet>,
    @InjectRepository(OrderPosition)
    private readonly orderPositionRepository: Repository<OrderPosition>,
  ) {}

  async seed<T>(repository: Repository<T>, data: T[]): Promise<void> {
    const existingCount = await repository.count();
    if (existingCount === 0) {
      await repository.save(data);
    }
  }

  async seedAll(): Promise<void> {
    await Promise.all([
      this.seed(this.categoryRepository, CATEGORIES_SEED),
      this.seed(this.colorRepository, COLORS_SEED),
      this.seed(this.customerRepository, CUSTOMERS_SEED),
      this.seed(this.materialRepository, MATERIALS_SEED),
      this.seed(this.profileRepository, PROFILES_SEED),
      this.seed(this.roleRepository, ROLES_SEED),
      this.seed(this.rollRepository, ROLLS_SEED),
      this.seed(this.thicknessRepository, THICKNESSES_SEED),
    ]);
  }
}
