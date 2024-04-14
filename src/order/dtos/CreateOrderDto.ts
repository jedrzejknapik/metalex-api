import { CreateOrderPositionDto } from './CreateOrderPositionDto';

export interface CreateOrderDto {
  orderNr: string;
  createdAt: Date;
  customerId: number;
  price: string;
  productQuantity: number;
  positions: CreateOrderPositionDto[];
}
