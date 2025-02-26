import { Test, TestingModule } from '@nestjs/testing';
import { CartService } from './cart.service';
import { PrismaService } from '../services/prisma.service';
import { ProductsService } from '../products/products.service';
import { UsersService } from '../users/users.service';
import { PasswordService } from '../services/password.service';
import { CreateCartDto } from './dto/create-cart.dto';

describe('CartService', () => {
  let service: CartService;
  let productService: ProductsService;
  let userService: UsersService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CartService, PrismaService, ProductsService, UsersService, PasswordService],
    }).compile();

    service = module.get<CartService>(CartService);
    productService = module.get<ProductsService>(ProductsService);
    userService = module.get<UsersService>(UsersService);

    const allProducts = await productService.findAll();
    for (const prod of allProducts) {
      await productService.remove(prod.id);
    }

    const allCarts = await service.findAll();
    for (const cart of allCarts) {
      await service.remove(cart.id);
    }
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a cart', async () => {
    const newProduct = await productService.create({
      name: 'Product 1',
      price: 100,
      colors: 'Red',
      starts: 5,
      imageUrl: 'https://www.google.com',
    });
    const user = await userService.findAll();
    const userId = user[0].id;
    const createCart = new CreateCartDto({
      totalValue: 100,
      userId,
      products: [newProduct],
    });
    const cart = await service.create(createCart);

    const transformProduct = {
      ...newProduct,
      cartId: cart.id,
      colors: newProduct.colors.join(','),
    };

    expect(cart).toBeInstanceOf(Object);
    expect(cart.createdAt).toBeInstanceOf(Date);
    expect(cart.totalValue).toBe(100);
    expect(cart.userId).toBe(userId);
    expect(cart.products).toEqual([transformProduct]);

    await productService.remove(newProduct.id);
    await service.remove(cart.id);
  });

  it('should find all carts', async () => {
    const carts = await service.findAll();
    expect(carts).toBeInstanceOf(Array);
  });

  it('should find a cart by id', async () => {
    const newProduct = await productService.create({
      name: 'Product 1',
      price: 100,
      colors: 'Red',
      starts: 5,
      imageUrl: 'https://www.google.com',
    });
    const user = await userService.findAll();
    const userId = user[0].id;
    const cart = await service.create({
      totalValue: 100,
      userId,
      products: [newProduct],
    });
    const transformProduct = {
      ...newProduct,
      cartId: cart.id,
      colors: newProduct.colors.join(','),
    };

    const cartFound = await service.findOne(cart.id);
    await service.remove(cart.id);

    expect(cartFound).toBeInstanceOf(Object);
    expect(cartFound?.createdAt).toBeInstanceOf(Date);
    expect(cartFound?.totalValue).toBe(100);
    expect(cartFound?.userId).toBe(userId);
    expect(cartFound?.products).toEqual([transformProduct]);

    await productService.remove(newProduct.id);
    await service.remove(cart.id);
  });

  it('should return null when not find a cart by id', async () => {
    const product = await service.findOne('invalid-id');
    expect(product).toBeNull();
  });

  it('should remove a cart', async () => {
    const newProduct = await productService.create({
      name: 'Product 1',
      price: 100,
      colors: 'Red',
      starts: 5,
      imageUrl: 'https://www.google.com',
    });
    const user = await userService.findAll();
    const userId = user[0].id;
    const cart = await service.create({
      totalValue: 100,
      userId,
      products: [newProduct],
    });
    const transformProduct = {
      ...newProduct,
      cartId: cart.id,
      colors: newProduct.colors.join(','),
    };

    await service.remove(cart.id);
    const cartFound = await service.findOne(cart.id);
    await productService.remove(newProduct.id);

    expect(cartFound).toBeNull();
    expect(cartFound?.createdAt).not.toBeInstanceOf(Date);
    expect(cartFound?.totalValue).not.toBe(100);
    expect(cartFound?.userId).not.toBe(userId);
    expect(cartFound?.products).not.toEqual([transformProduct]);
  });

  it('should return null when not find a cart to remove', async () => {
    const cart = await service.remove('invalid-id');
    expect(cart).toBeNull();
  });

  it('should update a cart', async () => {
    const newProduct = await productService.create({
      name: 'Product 1',
      price: 100,
      colors: 'Red',
      starts: 5,
      imageUrl: 'https://www.google.com',
    });
    const user = await userService.findAll();
    const userId = user[0].id;
    const cartCreated = await service.create({
      totalValue: 100,
      userId,
      products: [newProduct],
    });
    const transformProduct = {
      ...newProduct,
      cartId: cartCreated.id,
      colors: newProduct.colors.join(','),
    };
    const cartUpdated = await service.update(cartCreated.id, {
      totalValue: 200,
      products: [],
    });
    await productService.remove(newProduct.id);
    await service.remove(cartCreated.id);

    expect(cartUpdated).toBeInstanceOf(Object);
    expect(cartUpdated?.createdAt).toBeInstanceOf(Date);
    expect(cartUpdated?.totalValue).toBe(200);
    expect(cartUpdated?.userId).toBe(userId);
    expect(cartUpdated?.products).toEqual([transformProduct]);
  });

  it('should return null when not find a cart to update', async () => {
    const cart = await service.update('invalid-id', {
      totalValue: 200,
      products: [],
    });
    expect(cart).toBeNull();
  });
});
