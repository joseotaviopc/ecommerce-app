import { Address } from 'src/address/entities/address.entity';

export class Order {
  readonly id: string;
  readonly paymentMethod: string;
  readonly cartId: string;
  readonly addressId: string;
  readonly shippingAddress: Address;
  readonly createdAt: Date;

  constructor(order: Order) {
    this.id = order.id;
    this.paymentMethod = order.paymentMethod;
    this.cartId = order.cartId;
    this.addressId = order.addressId;
    this.shippingAddress = order.shippingAddress;
    this.createdAt = order.createdAt;
  }
}
