import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { OutputProductDto } from './dto/output-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiOperation({ description: 'Create a new product' })
  @ApiCreatedResponse({ description: 'Product created', type: OutputProductDto })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  @ApiInternalServerErrorResponse({ description: 'Something went wrong' })
  async create(@Body() createProductDto: CreateProductDto) {
    return await this.productsService.create(createProductDto);
  }

  @Get()
  @ApiOperation({ description: 'List all products' })
  @ApiCreatedResponse({ description: 'Products listed', type: OutputProductDto, isArray: true })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  @ApiInternalServerErrorResponse({ description: 'Something went wrong' })
  async findAll() {
    return await this.productsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ description: 'Get a product by id' })
  @ApiCreatedResponse({ description: 'Product retrieved', type: OutputProductDto })
  @ApiNotFoundResponse({ description: 'Product not found' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  @ApiInternalServerErrorResponse({ description: 'Something went wrong' })
  async findOne(@Param('id') id: string) {
    return await this.productsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ description: 'Update a product' })
  @ApiCreatedResponse({ description: 'Product updated', type: OutputProductDto })
  @ApiNotFoundResponse({ description: 'Product not found' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  @ApiInternalServerErrorResponse({ description: 'Something went wrong' })
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update({ id, updateProductDto });
  }

  @Delete(':id')
  @ApiOperation({ description: 'Delete a product' })
  @ApiOkResponse({ description: 'Product deleted' })
  @ApiNotFoundResponse({ description: 'Product not found' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  @ApiInternalServerErrorResponse({ description: 'Something went wrong' })
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}
