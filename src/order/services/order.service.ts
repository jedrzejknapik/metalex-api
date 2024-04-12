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
import { CreateOrderDto } from '../dtos/CreateOrderDto';
import { OrderPosition } from '../../typeorm/entities/OrderPosition';
import { OrderSheet } from '../../typeorm/entities/OrderSheets';
import { CreateOrderPositionDto } from '../dtos/CreateOrderPositionDto';
import { OrderStatusEnum } from '../../utils/types';
import { CreateOrderSheetDto } from '../dtos/CreateOrderSheetDto';

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
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
    @InjectRepository(SheetMetalRoll)
    private readonly rollRepository: Repository<SheetMetalRoll>,
    @InjectRepository(Thickness)
    private readonly thicknessRepository: Repository<Thickness>,
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(OrderPosition)
    private readonly orderPositionRepository: Repository<OrderPosition>,
    @InjectRepository(OrderSheet)
    private readonly orderSheetRepository: Repository<OrderSheet>,
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

  async createOrder(order: CreateOrderDto) {
    try {
      const { orderNr, date, customerId, positions, price, productQuantity } =
        order;

      const customer = await this.customerRepository.findOneBy({
        id: customerId,
      });

      const createdOrder = await this.orderRepository.save({
        orderNr,
        date,
        status: OrderStatusEnum.PENDING,
        customer,
        price,
        productQuantity,
      });

      positions.forEach(
        async (position) =>
          await this.createOrderPosition(position, createdOrder),
      );

      return createdOrder;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async createOrderPosition(
    orderPosition: CreateOrderPositionDto,
    order: Order,
  ) {
    const {
      profileId,
      thicknessId,
      width,
      materialId,
      colorId,
      isGlossy,
      isDoubleSided,
      isFirstClass,
      rollId,
      sheets,
    } = orderPosition;

    const profilePromise = this.profileRepository.findOneBy({ id: profileId });
    const thicknessPromise = this.thicknessRepository.findOneBy({
      id: thicknessId,
    });
    const materialPromise = this.materialRepository.findOneBy({
      id: materialId,
    });
    const colorPromise = this.colorRepository.findOneBy({ id: colorId });
    const rollPromise = this.rollRepository.findOneBy({ id: rollId });

    const [profile, thickness, material, color, roll] = await Promise.all([
      profilePromise,
      thicknessPromise,
      materialPromise,
      colorPromise,
      rollPromise,
    ]);

    const createdPosition = await this.orderPositionRepository.save({
      profile,
      thickness,
      width,
      color,
      isGlossy,
      isDoubleSided,
      isFirstClass,
      roll,
      material,
      order,
    });

    sheets.forEach(async (sheet) =>
      this.createOrderSheet(sheet, createdPosition),
    );
  }

  async createOrderSheet(
    orderSheet: CreateOrderSheetDto,
    position: OrderPosition,
  ) {
    await this.orderSheetRepository.save({
      ...orderSheet,
      orderPosition: position,
    });
  }
}
