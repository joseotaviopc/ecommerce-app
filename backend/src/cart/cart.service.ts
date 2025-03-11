import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Injectable()
export class CartService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createCartDto: CreateCartDto) {
    return await this.prisma.cart.create({
      data: {
        totalValue: createCartDto.totalValue,
        products: createCartDto.products,
        userId: createCartDto.userId,
      },
    });
  }

  async findAll() {
    return await this.prisma.cart.findMany();
  }

  async findOne(id: string) {
    const cart = await this.prisma.cart.findUnique({
      where: { id },
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
        products: updateCartDto.products,
      },
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
