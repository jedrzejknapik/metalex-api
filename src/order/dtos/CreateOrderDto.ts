import { CreateOrderPositionDto } from './CreateOrderPositionDto';

export interface CreateOrderDto {
  orderNr: string;
  date: Date;
  customerId: number;
  price: string;
  productQuantity: number;
  positions: CreateOrderPositionDto[];
}
