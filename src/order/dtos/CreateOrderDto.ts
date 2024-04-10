import { CreateOrderPositionDto } from './CreateOrderPositionDto';

export interface CreateOrderDto {
  orderNr: string;
  date: Date;
  customerId: number;
  positions: CreateOrderPositionDto[];
}
