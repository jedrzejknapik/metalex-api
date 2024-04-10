export interface CreateCustomerDto {
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  email?: string;
  nip?: string;
  companyNmae: string;
}
