import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';
import { UsersModule } from './users/users.module';
import { OrderModule } from './order/order.module';
import { Category } from './typeorm/entities/Category';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { Role } from './typeorm/entities/Role';
import { Color } from './typeorm/entities/Color';
import { Customer } from './typeorm/entities/Customer';
import { Material } from './typeorm/entities/Material';
import { Order } from './typeorm/entities/Order';
import { OrderPosition } from './typeorm/entities/OrderPosition';
import { Profile } from './typeorm/entities/Profile';
import { SheetMetalRoll } from './typeorm/entities/SheetMetalRoll';
import { Thickness } from './typeorm/entities/Thickness';
import { AppService } from './app.service';
import { OrderSheet } from './typeorm/entities/OrderSheets';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [
        Category,
        Color,
        Customer,
        Material,
        Order,
        OrderPosition,
        Profile,
        Role,
        OrderSheet,
        SheetMetalRoll,
        Thickness,
        User,
      ],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([
      Category,
      Color,
      Customer,
      Material,
      Order,
      OrderPosition,
      Profile,
      Role,
      OrderSheet,
      SheetMetalRoll,
      Thickness,
    ]),
    UsersModule,
    OrderModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
