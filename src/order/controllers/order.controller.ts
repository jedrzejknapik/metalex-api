import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrderService } from '../services/order.service';

@ApiTags('Order')
@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get()
  getOrders() {
    return this.orderService.findOrders();
  }

  @Get('dictionaries')
  async getCategories() {
    const [categories, profiles, colors, materials, thickness, rolls] =
      await Promise.all([
        this.orderService.findCategories(),
        this.orderService.findProfiles(),
        this.orderService.findColors(),
        this.orderService.findMaterials(),
        this.orderService.findThicknessValues(),
        this.orderService.findRolls(),
      ]);

    return {
      categories,
      profiles,
      colors,
      materials,
      thickness,
      rolls,
    };
  }

  @Get('customers')
  getCustomers() {
    return this.orderService.findCustomers();
  }
}
