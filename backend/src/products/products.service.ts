import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../services/prisma.service';
import { OutputProductDto } from './dto/output-product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto): Promise<OutputProductDto> {
    const createdProduct = await this.prisma.product.create({
      data: {
        ...createProductDto,
        // colors: createProductDto.colors.join(','),
        // cart: undefined,
        // cartId: '',
      },
    });
    const productToOutput = {
      ...createdProduct,
      colors: createdProduct.colors.split(','),
    };
    return new OutputProductDto(productToOutput);
  }

  async findAll(): Promise<OutputProductDto[]> {
    const products = await this.prisma.product.findMany();
    return products.map((product) => {
      const productToOutput = {
        ...product,
        colors: product.colors.split(','),
      };
      return new OutputProductDto(productToOutput);
    });
  }

  async findOne(id: string): Promise<OutputProductDto | null> {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });
    if (!product) return null;

    const productToOutput = {
      ...product,
      colors: product.colors.split(','),
    };
    return new OutputProductDto(productToOutput);
  }

  async update({
    id,
    updateProductDto,
  }: {
    id: string;
    updateProductDto: UpdateProductDto;
  }): Promise<OutputProductDto | null> {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });
    if (!product) return null;

    const productUpdated = await this.prisma.product.update({
      data: updateProductDto,
      where: { id },
    });
    const productToOutput = {
      ...productUpdated,
      colors: updateProductDto.colors
        ? updateProductDto.colors.split(',')
        : productUpdated.colors.split(','),
    };
    return new OutputProductDto(productToOutput);
  }

  async remove(id: string): Promise<void | null> {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });
    if (!product) return null;

    await this.prisma.product.delete({
      where: { id },
    });
  }
}
