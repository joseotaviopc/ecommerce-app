import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../services/prisma.service';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.prisma.user.create({
      data: createUserDto,
    });
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findOne(id: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: { id },
    });
  }

  async update({ id, data }: { id: string; data: UpdateUserDto }): Promise<User | null> {
    const hasUser = await this.prisma.user.findUnique({
      where: { id },
    });
    if (!hasUser) {
      return null;
    }
    return await this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async remove(id: string): Promise<User | null> {
    const hasUser = await this.prisma.user.findUnique({
      where: { id },
    });
    if (!hasUser) {
      return null;
    }
    return await this.prisma.user.delete({
      where: { id },
    });
  }
}
