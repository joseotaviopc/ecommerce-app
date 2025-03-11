import { Test, TestingModule } from '@nestjs/testing';
import { AddressService } from './address.service';
import { PrismaService } from '../services/prisma.service';
import { CreateAddressDto } from './dto/create-address.dto';
// import { describe, it, beforeEach, expect } from 'vitest';

describe('AddressService', () => {
  let service: AddressService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddressService, PrismaService],
    }).compile();

    service = module.get<AddressService>(AddressService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create an address', async () => {
    const newAddress = new CreateAddressDto({
      city: 'City 1',
      country: 'Country 1',
      fullName: 'Full Name 1',
      lineOne: 'Line One 1',
      lineTwo: 'Line Two 1',
      stateOrRegion: 'State or Region 1',
      zipCpde: 'Zip Code 1',
    });
    const addressCreated = await service.create(newAddress);

    expect(addressCreated).toBeInstanceOf(Object);
    expect(addressCreated.fullName).toBe('Full Name 1');
    expect(addressCreated.lineOne).toBe('Line One 1');
    expect(addressCreated.lineTwo).toBe('Line Two 1');
    expect(addressCreated.city).toBe('City 1');
    expect(addressCreated.stateOrRegion).toBe('State or Region 1');
    expect(addressCreated.zipCpde).toBe('Zip Code 1');
    expect(addressCreated.country).toBe('Country 1');

    await service.remove(addressCreated.id);
  });

  it('should find all addresses', async () => {
    const addresses = await service.findAll();
    expect(addresses).toBeInstanceOf(Array);
  });

  it('should find an address by id', async () => {
    const newAddress = new CreateAddressDto({
      city: 'City 1',
      country: 'Country 1',
      fullName: 'Full Name 1',
      lineOne: 'Line One 1',
      lineTwo: 'Line Two 1',
      stateOrRegion: 'State or Region 1',
      zipCpde: 'Zip Code 1',
    });
    const addressCreated = await service.create(newAddress);

    const address = await service.findOne(addressCreated.id);
    await service.remove(addressCreated.id);

    expect(address).toBeInstanceOf(Object);
    expect(address?.fullName).toBe('Full Name 1');
    expect(address?.lineOne).toBe('Line One 1');
    expect(address?.lineTwo).toBe('Line Two 1');
    expect(address?.city).toBe('City 1');
    expect(address?.stateOrRegion).toBe('State or Region 1');
    expect(address?.zipCpde).toBe('Zip Code 1');
    expect(address?.country).toBe('Country 1');
  });

  it('should return null when not find a address by id', async () => {
    const address = await service.findOne('invalid-id');
    expect(address).toBeNull();
  });

  it('should remove an address', async () => {
    const newAddress = new CreateAddressDto({
      city: 'City 1',
      country: 'Country 1',
      fullName: 'Full Name 1',
      lineOne: 'Line One 1',
      lineTwo: 'Line Two 1',
      stateOrRegion: 'State or Region 1',
      zipCpde: 'Zip Code 1',
    });
    const addressCreated = await service.create(newAddress);
    await service.remove(addressCreated.id);

    const address = await service.findOne(addressCreated.id);

    expect(address).toBeNull();
    expect(address?.fullName).not.toBe('Full Name 1');
    expect(address?.lineOne).not.toBe('Line One 1');
    expect(address?.lineTwo).not.toBe('Line Two 1');
    expect(address?.city).not.toBe('City 1');
    expect(address?.stateOrRegion).not.toBe('State or Region 1');
    expect(address?.zipCpde).not.toBe('Zip Code 1');
    expect(address?.country).not.toBe('Country 1');
  });

  it('should return null when not find a address to remove', async () => {
    const address = await service.remove('invalid-id');
    expect(address).toBeNull();
  });

  it('should update a address', async () => {
    const newAddress = new CreateAddressDto({
      city: 'City 1',
      country: 'Country 1',
      fullName: 'Full Name 1',
      lineOne: 'Line One 1',
      lineTwo: 'Line Two 1',
      stateOrRegion: 'State or Region 1',
      zipCpde: 'Zip Code 1',
    });
    const addressCreated = await service.create(newAddress);

    const addressUpdated = await service.update(addressCreated.id, {
      fullName: 'Address 1 Updated',
    });

    await service.remove(addressCreated.id);
    expect(addressUpdated).toBeInstanceOf(Object);
    expect(addressUpdated?.fullName).toBe('Address 1 Updated');
  });

  it('should return null when not find a address to update', async () => {
    const address = await service.update('invalid-id', {
      fullName: 'Address 1 Updated',
    });
    expect(address).toBeNull();
  });
});
