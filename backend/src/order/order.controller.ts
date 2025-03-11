import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { OutputOrderDto } from './dto/output-order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @ApiOperation({ description: 'Create a new order' })
  @ApiCreatedResponse({ description: 'Order created', type: OutputOrderDto })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  @ApiInternalServerErrorResponse({ description: 'Something went wrong' })
  async create(@Body() createOrderDto: CreateOrderDto) {
    return await this.orderService.create(createOrderDto);
  }

  @Get()
  @ApiOperation({ description: 'Get all orders' })
  @ApiCreatedResponse({ description: 'Orders retrieved', type: OutputOrderDto, isArray: true })
  @ApiNotFoundResponse({ description: 'Orders not found' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  @ApiInternalServerErrorResponse({ description: 'Something went wrong' })
  async findAll() {
    return await this.orderService.findAll();
  }

  @Get(':id')
  @ApiOperation({ description: 'Get a order by id' })
  @ApiCreatedResponse({ description: 'Order retrieved', type: OutputOrderDto })
  @ApiNotFoundResponse({ description: 'Order not found' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  @ApiInternalServerErrorResponse({ description: 'Something went wrong' })
  async findOne(@Param('id') id: string) {
    return await this.orderService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ description: 'Update a order by id' })
  @ApiCreatedResponse({ description: 'Order updated', type: OutputOrderDto })
  @ApiNotFoundResponse({ description: 'Order not found' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  @ApiInternalServerErrorResponse({ description: 'Something went wrong' })
  async update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return await this.orderService.update(id, updateOrderDto);
  }

  @Delete(':id')
  @ApiOperation({ description: 'Delete a order by id' })
  @ApiCreatedResponse({ description: 'Order deleted' })
  @ApiNotFoundResponse({ description: 'Order not found' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  @ApiInternalServerErrorResponse({ description: 'Something went wrong' })
  async remove(@Param('id') id: string) {
    await this.orderService.remove(id);
  }
}
