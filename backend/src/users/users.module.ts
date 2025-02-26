import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/services/prisma.service';
import { PasswordService } from 'src/services/password.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, PasswordService],
})
export class UsersModule {}
