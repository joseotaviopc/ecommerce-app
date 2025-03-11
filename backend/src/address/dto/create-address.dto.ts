import { ApiProperty } from '@nestjs/swagger';

export class CreateAddressDto {
  @ApiProperty({
    type: 'string',
    required: true,
    description: 'City',
    example: 'City 1',
  })
  readonly city: string;

  @ApiProperty({
    type: 'string',
    required: true,
    description: 'Country',
    example: 'Country 1',
  })
  readonly country: string;

  @ApiProperty({
    type: 'string',
    required: true,
    description: 'Full Name',
    example: 'Full Name 1',
  })
  readonly fullName: string;

  @ApiProperty({
    type: 'string',
    required: true,
    description: 'Line One',
    example: 'Line One 1',
  })
  readonly lineOne: string;

  @ApiProperty({
    type: 'string',
    required: true,
    description: 'Line Two',
    example: 'Line Two 1',
  })
  readonly lineTwo: string;

  @ApiProperty({
    type: 'string',
    required: true,
    description: 'State or Region',
    example: 'State or Region 1',
  })
  readonly stateOrRegion: string;

  @ApiProperty({
    type: 'string',
    required: true,
    description: 'Zip Code',
    example: 'Zip Code 1',
  })
  readonly zipCpde: string;

  constructor(addressDto: CreateAddressDto) {
    this.city = addressDto.city;
    this.country = addressDto.country;
    this.fullName = addressDto.fullName;
    this.lineOne = addressDto.lineOne;
    this.lineTwo = addressDto.lineTwo;
    this.stateOrRegion = addressDto.stateOrRegion;
    this.zipCpde = addressDto.zipCpde;
  }
}
