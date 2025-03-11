import { ApiProperty } from '@nestjs/swagger';

export class OutputCartDto {
  @ApiProperty({
    type: 'string',
    required: true,
    description: 'Cart id',
    example: '5f9f1c9c-7b1a-4b9f-9c9c-7b1a4b9f9c9c',
  })
  readonly id: string;

  @ApiProperty({
    type: 'number',
    required: true,
    description: 'Total value of cart',
    example: 100,
  })
  readonly totalValue: number;

  @ApiProperty({
    type: 'string',
    required: true,
    description: 'Products',
    example: "['5f9f1c9c-7b1a-4b9f-9c9c-7b1a4b9f9c9c', '5f9f1c9c-7b1a-4b9f-9c9c-7b1a4b9f9c9c'] ",
  })
  readonly products: string;

  @ApiProperty({
    type: 'string',
    required: true,
    description: 'User id',
    example: '5f9f1c9c-7b1a-4b9f-9c9c-7b1a4b9f9c9c',
  })
  readonly userId: string;

  @ApiProperty({
    type: Date,
    required: true,
    description: 'Cart creation date',
    example: '2020-01-01 00:00:00',
  })
  readonly createdAt: Date;

  constructor(cartDto: OutputCartDto) {
    this.id = cartDto.id;
    this.totalValue = cartDto.totalValue;
    this.products = cartDto.products;
    this.userId = cartDto.userId;
    this.createdAt = cartDto.createdAt;
  }
}
