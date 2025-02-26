import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
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
    required: true,
    description: 'Product colors',
    example: 'Product 1 description',
  })
  readonly colors: string;

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

  constructor(productDto: CreateProductDto) {
    this.name = productDto.name;
    this.starts = productDto.starts;
    this.colors = productDto.colors;
    this.price = productDto.price;
    this.imageUrl = productDto.imageUrl;
  }
}
