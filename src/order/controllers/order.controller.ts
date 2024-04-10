import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrderService } from '../services/order.service';
import { CreateOrderDto } from '../dtos/CreateOrderDto';

@ApiTags('Order')
@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get()
  getOrders() {
    return this.orderService.findOrders();
  }

  @Post()
  async createOrder(@Body() createOrderPayload: CreateOrderDto) {
    return await this.orderService.createOrder(createOrderPayload);
  }

  @Get('profiles')
  getProfiles() {
    return this.orderService.findProfiles();
  }

  @Get('colors')
  getColors() {
    return this.orderService.findColors();
  }

  @Get('materials')
  getMaterials() {
    return this.orderService.findMaterials();
  }

  @Get('thickness')
  getThickness() {
    return this.orderService.findThicknessValues();
  }

  @Get('rolls')
  getRolls() {
    return this.orderService.findRolls();
  }

  @Get('customers')
  getCustomers() {
    return this.orderService.findCustomers();
  }
}
