import { CreateOrderSheetDto } from './CreateOrderSheetDto';

export interface CreateOrderPositionDto {
  profileId: number;
  thicknessId: number;
  width: number;
  colorId: number;
  isGlossy: boolean;
  isDoubleSided: boolean;
  isFirstClass: boolean;
  rollId: number;
  materialId: number;
  sheets: CreateOrderSheetDto[];
}
