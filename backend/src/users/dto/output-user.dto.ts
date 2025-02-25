import { ApiProperty } from '@nestjs/swagger';
import { User } from '../entities/user.entity';

export class OutputUserDto {
  @ApiProperty({
    type: 'string',
    required: true,
    description: 'User id',
    example: '5f9f1c9c-7b1a-4b9f-9c9c-7b1a4b9f9c9c',
  })
  readonly id: string;

  @ApiProperty({
    type: 'string',
    required: true,
    description: 'User name',
    example: 'John Doe',
  })
  readonly name: string;

  @ApiProperty({
    type: 'string',
    required: true,
    description: 'User email',
    example: 'john.doe@domain.com',
  })
  readonly email: string;

  @ApiProperty({
    type: Date,
    required: true,
    description: 'User creation date',
    example: '2020-01-01 00:00:00',
  })
  readonly createdAt: Date;

  constructor(userDto: User) {
    this.id = userDto.id;
    this.name = userDto.name;
    this.email = userDto.email;
    this.createdAt = userDto.createdAt;
  }
}
