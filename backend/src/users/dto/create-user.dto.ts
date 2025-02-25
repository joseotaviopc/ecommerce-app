import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
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
    type: 'string',
    required: true,
    description: 'User password',
    example: 'P@ssw0rd',
  })
  readonly password: string;

  constructor(userDto: CreateUserDto) {
    this.name = userDto.name;
    this.email = userDto.email;
    this.password = userDto.password;
  }
}
