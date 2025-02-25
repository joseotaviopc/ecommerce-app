import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpCode,
  HttpException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { OutputUserDto } from './dto/output-user.dto';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ description: 'Create a new user' })
  @ApiCreatedResponse({ description: 'User created', type: OutputUserDto })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  @ApiInternalServerErrorResponse({ description: 'Something went wrong' })
  async create(@Body() createUserDto: CreateUserDto): Promise<OutputUserDto> {
    const userCreated = await this.usersService.create(createUserDto);
    return new OutputUserDto(userCreated);
  }

  @Get()
  @ApiOperation({ description: 'List all users' })
  @ApiCreatedResponse({ description: 'Users listed', type: OutputUserDto, isArray: true })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  @ApiInternalServerErrorResponse({ description: 'Something went wrong' })
  async findAll(): Promise<OutputUserDto[]> {
    const users = await this.usersService.findAll();
    return users.map((user) => new OutputUserDto(user));
  }

  @Get(':id')
  @ApiOperation({ description: 'Get a user by id' })
  @ApiCreatedResponse({ description: 'User retrieved', type: OutputUserDto })
  @ApiNotFoundResponse({ description: 'User not found' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  @ApiInternalServerErrorResponse({ description: 'Something went wrong' })
  async findOne(@Param('id') id: string): Promise<OutputUserDto | Response> {
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return new OutputUserDto(user);
  }

  @Patch(':id')
  @ApiOperation({ description: 'Update a user' })
  @ApiCreatedResponse({ description: 'User updated', type: OutputUserDto })
  @ApiNotFoundResponse({ description: 'User not found' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  @ApiInternalServerErrorResponse({ description: 'Something went wrong' })
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<OutputUserDto | Response> {
    const user = await this.usersService.update({ id, data: updateUserDto });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return new OutputUserDto(user);
  }

  @Delete(':id')
  @HttpCode(200)
  @ApiOperation({ description: 'Delete a user' })
  @ApiOkResponse({ description: 'User deleted' })
  @ApiNotFoundResponse({ description: 'User not found' })
  @ApiBadRequestResponse({ description: 'Invalid data' })
  @ApiInternalServerErrorResponse({ description: 'Something went wrong' })
  async remove(@Param('id') id: string): Promise<Response | void> {
    const user = await this.usersService.remove(id);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
  }
}
