import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { PrismaService } from '../services/prisma.service';

@Injectable()
export class CartService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCartDto: CreateCartDto) {
    return await this.prisma.cart.create({
      data: {
        totalValue: createCartDto.totalValue,
        products: {
          connect: createCartDto.products.map((product) => {
            return {
              ...product,
              colors: product.colors.join(','),
            };
          }),
        },
        userId: createCartDto.userId,
      },
      include: { products: true },
    });
  }

  async findAll() {
    return await this.prisma.cart.findMany({
      include: {
        products: true,
      },
    });
  }

  async findOne(id: string) {
    const cart = await this.prisma.cart.findUnique({
      where: { id },
      include: {
        products: true,
      },
    });
    if (!cart) return null;

    return cart;
  }

  async update(id: string, updateCartDto: UpdateCartDto) {
    const cart = await this.prisma.cart.findUnique({
      where: { id },
    });
    if (!cart) return null;

    return await this.prisma.cart.update({
      where: { id },
      data: {
        totalValue: updateCartDto.totalValue,
        products: {
          connect: updateCartDto.products.map((product) => {
            return {
              ...product,
              colors: product.colors.join(','),
            };
          }),
        },
      },
      include: { products: true },
    });
  }

  async remove(id: string) {
    const cart = await this.prisma.cart.findUnique({
      where: { id },
    });
    if (!cart) return null;

    await this.prisma.cart.delete({ where: { id } });
  }
}
