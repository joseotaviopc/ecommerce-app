import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { OutputAddressDto } from './dto/output-address.dto';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  @ApiOperation({ description: 'Create a new address' })
  @ApiCreatedResponse({ description: 'Address created', type: OutputAddressDto })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  @ApiInternalServerErrorResponse({ description: 'Something went wrong' })
  async create(@Body() createAddressDto: CreateAddressDto) {
    return await this.addressService.create(createAddressDto);
  }

  @Get()
  @ApiOperation({ description: 'Get all addresses' })
  @ApiCreatedResponse({ description: 'Addresses found', type: OutputAddressDto, isArray: true })
  @ApiNotFoundResponse({ description: 'Addresses not found' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  @ApiInternalServerErrorResponse({ description: 'Something went wrong' })
  async findAll() {
    return await this.addressService.findAll();
  }

  @Get(':id')
  @ApiOperation({ description: 'Get an address by id' })
  @ApiCreatedResponse({ description: 'Address found', type: OutputAddressDto })
  @ApiNotFoundResponse({ description: 'Address not found' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  @ApiInternalServerErrorResponse({ description: 'Something went wrong' })
  async findOne(@Param('id') id: string) {
    return await this.addressService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ description: 'Update an address' })
  @ApiCreatedResponse({ description: 'Address updated', type: OutputAddressDto })
  @ApiNotFoundResponse({ description: 'Address not found' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  @ApiInternalServerErrorResponse({ description: 'Something went wrong' })
  async update(@Param('id') id: string, @Body() updateAddressDto: UpdateAddressDto) {
    return await this.addressService.update(id, updateAddressDto);
  }

  @Delete(':id')
  @ApiOperation({ description: 'Delete an address' })
  @ApiCreatedResponse({ description: 'Address deleted', type: OutputAddressDto })
  @ApiNotFoundResponse({ description: 'Address not found' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  @ApiInternalServerErrorResponse({ description: 'Something went wrong' })
  async remove(@Param('id') id: string) {
    await this.addressService.remove(id);
  }
}
