import { ApiProperty } from '@nestjs/swagger';

export class OutputProductDto {
  @ApiProperty({
    type: 'string',
    required: true,
    description: 'Product id',
    example: '5f9f1c9c-7b1a-4b9f-9c9c-7b1a4b9f9c9c',
  })
  readonly id: string;

  @ApiProperty({
    type: 'string',
    required: true,
    description: 'Product name',
    example: 'Product 1',
  })
  readonly name: string;

  @ApiProperty({
    type: 'number',
    required: true,
    description: 'Product starts',
    example: 5,
  })
  readonly starts: number;

  @ApiProperty({
    type: 'string',
    isArray: true,
    required: true,
    description: 'Product colors',
    example: 'Product 1 description',
  })
  readonly colors: string[];

  @ApiProperty({
    type: 'number',
    required: true,
    description: 'Product price',
    example: 5,
  })
  readonly price: number;

  @ApiProperty({
    type: 'string',
    required: true,
    description: 'Product image url',
    example: 'Product 1 description',
  })
  readonly imageUrl: string;

  @ApiProperty({
    type: 'string',
    required: true,
    description: 'Product cart id',
    example: 'Product 1 description',
  })
  readonly cartId: string | null;

  @ApiProperty({
    type: Date,
    required: true,
    description: 'Product creation date',
    example: '2020-01-01 00:00:00',
  })
  readonly createdAt: Date;

  constructor(productDto: OutputProductDto) {
    this.id = productDto.id;
    this.name = productDto.name;
    this.starts = productDto.starts;
    this.colors = productDto.colors;
    this.price = productDto.price;
    this.imageUrl = productDto.imageUrl;
    this.cartId = productDto.cartId;
    this.createdAt = productDto.createdAt;
  }
}
