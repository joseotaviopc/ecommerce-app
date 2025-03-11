import { Test, TestingModule } from '@nestjs/testing';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';
import { PrismaService } from '../services/prisma.service';
import { CreateAddressDto } from './dto/create-address.dto';
// import { describe, it, beforeEach, expect } from 'vitest';

describe('AddressController', () => {
  let controller: AddressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddressController],
      providers: [AddressService, PrismaService],
    }).compile();

    controller = module.get<AddressController>(AddressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a address', async () => {
    const createAddress = new CreateAddressDto({
      city: 'City 1',
      country: 'Country 1',
      fullName: 'Full Name 1',
      lineOne: 'Line One 1',
      lineTwo: 'Line Two 1',
      stateOrRegion: 'State or Region 1',
      zipCpde: 'Zip Code 1',
    });
    const address = await controller.create(createAddress);
    await controller.remove(address.id);
    expect(address).toBeInstanceOf(Object);
  });

  it('should find all addresses', async () => {
    const addresses = await controller.findAll();
    expect(addresses).toBeInstanceOf(Array);
  });

  it('should find a address by id', async () => {
    const address = await controller.create({
      city: 'City 1',
      country: 'Country 1',
      fullName: 'Full Name 1',
      lineOne: 'Line One 1',
      lineTwo: 'Line Two 1',
      stateOrRegion: 'State or Region 1',
      zipCpde: 'Zip Code 1',
    });
    const addressFound = await controller.findOne(address.id);
    await controller.remove(address.id);
    expect(addressFound).toBeInstanceOf(Object);
  });

  it('should update a address', async () => {
    const address = await controller.create({
      city: 'City 1',
      country: 'Country 1',
      fullName: 'Full Name 1',
      lineOne: 'Line One 1',
      lineTwo: 'Line Two 1',
      stateOrRegion: 'State or Region 1',
      zipCpde: 'Zip Code 1',
    });
    const addressUpdated = await controller.update(address.id, {
      city: 'City 1 Updated',
      country: 'Country 1 Updated',
      fullName: 'Full Name 1 Updated',
      lineOne: 'Line One 1 Updated',
      lineTwo: 'Line Two 1 Updated',
      stateOrRegion: 'State or Region 1 Updated',
      zipCpde: 'Zip Code 1 Updated',
    });
    await controller.remove(address.id);
    expect(addressUpdated).toBeInstanceOf(Object);
  });

  it('should remove a address', async () => {
    const address = await controller.create({
      city: 'City 1',
      country: 'Country 1',
      fullName: 'Full Name 1',
      lineOne: 'Line One 1',
      lineTwo: 'Line Two 1',
      stateOrRegion: 'State or Region 1',
      zipCpde: 'Zip Code 1',
    });
    const addressRemoved = await controller.remove(address.id);
    expect(addressRemoved).toBeFalsy();
  });
});
