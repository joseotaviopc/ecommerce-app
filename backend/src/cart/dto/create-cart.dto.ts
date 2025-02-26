import { ApiProperty } from '@nestjs/swagger';
import { Product } from '../../products/entities/product.entity';

export class CreateCartDto {
  @ApiProperty({
    type: 'number',
    required: true,
    description: 'Total value of cart',
    example: 100,
  })
  readonly totalValue: number;

  @ApiProperty({
    type: Product,
    isArray: true,
    required: true,
    description: 'Products',
    example: "['5f9f1c9c-7b1a-4b9f-9c9c-7b1a4b9f9c9c', '5f9f1c9c-7b1a-4b9f-9c9c-7b1a4b9f9c9c'] ",
  })
  readonly products: Product[];

  @ApiProperty({
    type: 'string',
    required: true,
    description: 'User id',
    example: '5f9f1c9c-7b1a-4b9f-9c9c-7b1a4b9f9c9c',
  })
  readonly userId: string;

  constructor(cartDto: CreateCartDto) {
    this.totalValue = cartDto.totalValue;
    this.products = cartDto.products;
    this.userId = cartDto.userId;
  }
}
