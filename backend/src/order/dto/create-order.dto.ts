import { ApiProperty } from '@nestjs/swagger';
import { Address } from 'src/address/entities/address.entity';

export class CreateOrderDto {
  @ApiProperty({
    type: 'string',
    required: true,
    description: 'Payment method',
    example: 'credit_card',
  })
  readonly paymentMethod: string;

  @ApiProperty({
    type: 'string',
    required: true,
    description: 'Cart id',
    example: '5f9f1c9c-7b1a-4b9f-9c9c-7b1a4b9f9c9c',
  })
  readonly cartId: string;

  @ApiProperty({
    type: 'string',
    required: true,
    description: 'Address id',
    example: '5f9f1c9c-7b1a-4b9f-9c9c-7b1a4b9f9c9c',
  })
  readonly addressId: string;

  @ApiProperty({
    type: Address,
    required: true,
    description: 'Address',
    example:
      '{ "fullName": "John Doe", "lineOne": "Street 1", "lineTwo": "Street 2", "city": "City 1", "stateOrRegion": "State 1", "country": "Country 1", "zip": "00000-000" }',
  })
  readonly shippingAddress: Address;

  constructor(orderDto: CreateOrderDto) {
    this.paymentMethod = orderDto.paymentMethod;
    this.cartId = orderDto.cartId;
    this.addressId = orderDto.addressId;
    this.shippingAddress = orderDto.shippingAddress;
  }
}
