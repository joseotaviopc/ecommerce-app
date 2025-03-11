import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { OutputCartDto } from './dto/output-cart.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  @ApiOperation({ description: 'Create a new cart' })
  @ApiCreatedResponse({ description: 'Cart created', type: OutputCartDto })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  @ApiInternalServerErrorResponse({ description: 'Something went wrong' })
  async create(@Body() createCartDto: CreateCartDto) {
    return await this.cartService.create(createCartDto);
  }

  @Get()
  @ApiOperation({ description: 'List all cart' })
  @ApiCreatedResponse({ description: 'Carts listed', type: OutputCartDto, isArray: true })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  @ApiInternalServerErrorResponse({ description: 'Something went wrong' })
  async findAll() {
    return await this.cartService.findAll();
  }

  @Get(':id')
  @ApiOperation({ description: 'Get a new cart by id' })
  @ApiCreatedResponse({ description: 'Cart retrieved', type: OutputCartDto })
  @ApiNotFoundResponse({ description: 'Cart not found' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  @ApiInternalServerErrorResponse({ description: 'Something went wrong' })
  async findOne(@Param('id') id: string) {
    return await this.cartService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ description: 'Update a cart' })
  @ApiCreatedResponse({ description: 'Cart updated', type: OutputCartDto })
  @ApiNotFoundResponse({ description: 'Cart not found' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  @ApiInternalServerErrorResponse({ description: 'Something went wrong' })
  async update(@Param('id') id: string, @Body() updateCartDto: UpdateCartDto) {
    return await this.cartService.update(id, updateCartDto);
  }

  @Delete(':id')
  @ApiOperation({ description: 'Delete a cart' })
  @ApiCreatedResponse({ description: 'Cart deleted', type: OutputCartDto })
  @ApiNotFoundResponse({ description: 'Cart not found' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  @ApiInternalServerErrorResponse({ description: 'Something went wrong' })
  async remove(@Param('id') id: string) {
    await this.cartService.remove(id);
  }
}
