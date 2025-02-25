import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaService } from '../services/prisma.service';
import { faker } from '@faker-js/faker/.';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService, PrismaService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a user', async () => {
    const fakeEmail = faker.internet.email();
    const user = await controller.create({
      name: 'John Doe',
      email: fakeEmail,
      password: 'password',
    });
    // await controller.remove(user.id);
    expect(user).toBeInstanceOf(Object);
  });

  it('should find all users', async () => {
    const users = await controller.findAll();
    expect(users).toBeInstanceOf(Array);
  });

  it('should find a user by id', async () => {
    const fakeEmail = faker.internet.email();
    const user = await controller.create({
      name: 'John Doe',
      email: fakeEmail,
      password: 'password',
    });
    const userFound = await controller.findOne(user.id);
    await controller.remove(user.id);
    expect(userFound).toBeInstanceOf(Object);
  });

  it('should update a user', async () => {
    const fakeEmail = faker.internet.email();
    const user = await controller.create({
      name: 'John Doe',
      email: fakeEmail,
      password: 'password',
    });
    const userUpdated = await controller.update(user.id, {
      name: 'John Doe Updated',
      email: 'john.doe.updated@domain.com',
    });
    await controller.remove(user.id);
    expect(userUpdated).toBeInstanceOf(Object);
  });

  it('should remove a user', async () => {
    const fakeEmail = faker.internet.email();
    const user = await controller.create({
      name: 'John Doe',
      email: fakeEmail,
      password: 'password',
    });
    const userRemoved = await controller.remove(user.id);
    // await controller.remove(user.id);
    expect(userRemoved).toBeFalsy();
  });
});
