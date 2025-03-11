import { ApiProperty } from '@nestjs/swagger';

export class OutputAddressDto {
  @ApiProperty({
    type: 'string',
    required: true,
    description: 'Address id',
    example: '5f9f1c9c-7b1a-4b9f-9c9c-7b1a4b9f9c9c',
  })
  readonly id: string;

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

  @ApiProperty({
    type: Date,
    required: true,
    description: 'Created At',
    example: '2021-08-01T00:00:00.000Z',
  })
  readonly createdAt: Date;

  constructor(address: OutputAddressDto) {
    this.id = address.id;
    this.city = address.city;
    this.country = address.country;
    this.fullName = address.fullName;
    this.lineOne = address.lineOne;
    this.lineTwo = address.lineTwo;
    this.stateOrRegion = address.stateOrRegion;
    this.zipCpde = address.zipCpde;
    this.createdAt = address.createdAt;
  }
}
