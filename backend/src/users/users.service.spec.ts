import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { PrismaService } from '../services/prisma.service';
import { faker } from '@faker-js/faker';
import { CreateUserDto } from './dto/create-user.dto';
import { PasswordService } from '../services/password.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, PrismaService, PasswordService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  const fakeEmail = faker.internet.email();

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user', async () => {
    const newUser = new CreateUserDto({
      name: 'John Doe',
      email: fakeEmail,
      password: 'password',
    });
    const userCreated = await service.create(newUser);
    const user = await service.findOne(userCreated.id);

    expect(userCreated).toBeInstanceOf(Object);
    expect(userCreated.createdAt).toBeInstanceOf(Date);
    expect(userCreated.email).toBe(fakeEmail);
    expect(userCreated.name).toBe('John Doe');
    expect(userCreated.password).toBe(user?.password);

    await service.remove(userCreated.id);
  });

  it('should find all users', async () => {
    const users = await service.findAll();
    expect(users).toBeInstanceOf(Array);
  });

  it('should find a user by id', async () => {
    const userCreated = await service.create({
      name: 'John Doe',
      email: fakeEmail,
      password: 'password',
    });

    const user = await service.findOne(userCreated.id);
    await service.remove(userCreated.id);

    expect(user).toBeInstanceOf(Object);
    expect(user?.createdAt).toBeInstanceOf(Date);
    expect(user?.email).toBe(fakeEmail);
    expect(user?.name).toBe('John Doe');
    expect(user?.password).toHaveLength(60);
  });

  it('should return null when not find a user by id', async () => {
    const user = await service.findOne('invalid-id');
    expect(user).toBeNull();
  });

  it('should remove a user', async () => {
    const userCreated = await service.create({
      name: 'John Doe',
      email: fakeEmail,
      password: 'password',
    });

    await service.remove(userCreated.id);
    const user = await service.findOne(userCreated.id);
    expect(user).toBeNull();
    expect(user?.createdAt).not.toBeInstanceOf(Date);
    expect(user?.email).not.toBe(fakeEmail);
    expect(user?.name).not.toBe('John Doe');
    expect(user?.password).not.toBe('password');
  });

  it('should return null when not find a user to remove', async () => {
    const user = await service.remove('invalid-id');
    expect(user).toBeNull();
  });

  it('should update a user', async () => {
    const userCreated = await service.create({
      name: 'John Doe',
      email: fakeEmail,
      password: 'password',
    });

    const userUpdated = await service.update({
      id: userCreated.id,
      data: {
        name: 'John Doe Updated',
        email: 'john.doe.updated@domain.com',
      },
    });

    await service.remove(userCreated.id);
    expect(userUpdated).toBeInstanceOf(Object);
    expect(userUpdated?.createdAt).toBeInstanceOf(Date);
    expect(userUpdated?.email).toBe('john.doe.updated@domain.com');
    expect(userUpdated?.name).toBe('John Doe Updated');
    expect(userUpdated?.password).toHaveLength(60);
  });

  it('should return null when not find a user to update', async () => {
    const user = await service.update({
      id: 'invalid-id',
      data: {
        name: 'John Doe Updated',
        email: 'john.doe.updated@domain.com',
      },
    });
    expect(user).toBeNull();
  });
});
