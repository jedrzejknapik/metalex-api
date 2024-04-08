import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from '../typeorm/entities/Category';
import { OrderService } from './services/order.service';
import { OrderController } from './controllers/order.controller';
import { Color } from '../typeorm/entities/Color';
import { Customer } from '../typeorm/entities/Customer';
import { Material } from '../typeorm/entities/Material';
import { Order } from '../typeorm/entities/Order';
import { Profile } from '../typeorm/entities/Profile';
import { Role } from '../typeorm/entities/Role';
import { SheetMetalRoll } from '../typeorm/entities/SheetMetalRoll';
import { Thickness } from '../typeorm/entities/Thickness';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Category,
      Color,
      Customer,
      Material,
      Order,
      Profile,
      Role,
      SheetMetalRoll,
      Thickness,
    ]),
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
