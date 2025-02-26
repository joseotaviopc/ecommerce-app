import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { PrismaService } from '../services/prisma.service';

describe('ProductsController', () => {
  let controller: ProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService, PrismaService],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a product', async () => {
    const product = await controller.create({
      name: 'Product 1',
      price: 100,
      colors: 'Red',
      starts: 5,
      imageUrl: 'https://www.google.com',
    });
    await controller.remove(product.id);
    expect(product).toBeInstanceOf(Object);
  });

  it('should find all products', async () => {
    const products = await controller.findAll();
    expect(products).toBeInstanceOf(Array);
  });

  it('should find a product by id', async () => {
    const product = await controller.create({
      name: 'Product 1',
      price: 100,
      colors: 'Red',
      starts: 5,
      imageUrl: 'https://www.google.com',
    });
    const productFound = await controller.findOne(product.id);
    await controller.remove(product.id);
    expect(productFound).toBeInstanceOf(Object);
  });

  it('should update a product', async () => {
    const product = await controller.create({
      name: 'Product 1',
      price: 100,
      colors: 'Red',
      starts: 5,
      imageUrl: 'https://www.google.com',
    });
    const productUpdated = await controller.update(product.id, {
      name: 'Product 1 Updated',
      price: 200,
      colors: 'Blue',
      starts: 5,
      imageUrl: 'https://www.google.com',
    });
    await controller.remove(product.id);
    expect(productUpdated).toBeInstanceOf(Object);
  });

  it('should remove a product', async () => {
    const product = await controller.create({
      name: 'Product 1',
      price: 100,
      colors: 'Red',
      starts: 5,
      imageUrl: 'https://www.google.com',
    });
    const productRemoved = await controller.remove(product.id);
    expect(productRemoved).toBeFalsy();
  });
});
