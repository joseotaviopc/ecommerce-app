import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { PrismaService } from '../services/prisma.service';

@Injectable()
export class AddressService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAddressDto: CreateAddressDto) {
    return await this.prisma.address.create({
      data: {
        city: createAddressDto.city,
        country: createAddressDto.country,
        fullName: createAddressDto.fullName,
        lineOne: createAddressDto.lineOne,
        lineTwo: createAddressDto.lineTwo,
        stateOrRegion: createAddressDto.stateOrRegion,
        zipCpde: createAddressDto.zipCpde,
      },
    });
  }

  async findAll() {
    return await this.prisma.address.findMany();
  }

  async findOne(id: string) {
    const address = await this.prisma.address.findUnique({
      where: { id },
    });
    if (!address) return null;

    return address;
  }

  async update(id: string, updateAddressDto: UpdateAddressDto) {
    const address = await this.prisma.address.findUnique({
      where: { id },
    });
    if (!address) return null;

    return await this.prisma.address.update({ where: { id }, data: updateAddressDto });
  }

  async remove(id: string) {
    const address = await this.prisma.address.findUnique({
      where: { id },
    });
    if (!address) return null;

    await this.prisma.address.delete({ where: { id } });
  }
}
