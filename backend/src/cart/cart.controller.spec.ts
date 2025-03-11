import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from '../products/products.controller';
import { ProductsService } from '../products/products.service';
import { PrismaService } from '../services/prisma.service';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';

describe('CartController', () => {
  let controller: CartController;
  let productController: ProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CartController, ProductsController],
      providers: [CartService, PrismaService, ProductsService],
    }).compile();

    controller = module.get<CartController>(CartController);
    productController = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a cart', async () => {
    const newProduct = await productController.create({
      name: 'Product 1',
      price: 100,
      colors: 'Red',
      starts: 5,
      imageUrl: 'https://www.google.com',
    });
    const newProductString = JSON.stringify([newProduct]);
    const cart = await controller.create({
      totalValue: 100,
      userId: '',
      products: newProductString,
    });

    await productController.remove(newProduct.id);
    expect(cart).toBeInstanceOf(Object);

    await controller.remove(cart.id);
  });

  it('should find all carts', async () => {
    const carts = await controller.findAll();
    expect(carts).toBeInstanceOf(Array);
  });

  it('should find a cart by id', async () => {
    const newProduct = await productController.create({
      name: 'Product 1',
      price: 100,
      colors: 'Red',
      starts: 5,
      imageUrl: 'https://www.google.com',
    });
    const newProductString = JSON.stringify([newProduct]);
    const cart = await controller.create({
      totalValue: 100,
      userId: '',
      products: newProductString,
    });

    const cartFound = controller.findOne(cart.id);
    await productController.remove(newProduct.id);
    await controller.remove(cart.id);

    expect(cartFound).toBeInstanceOf(Object);
  });

  it('should update a cart', async () => {
    // const product = await controller.create({
    //   name: 'Product 1',
    //   price: 100,
    //   colors: 'Red',
    //   starts: 5,
    //   imageUrl: 'https://www.google.com',
    // });
    // const productUpdated = await controller.update(product.id, {
    //   name: 'Product 1 Updated',
    //   price: 200,
    //   colors: 'Blue',
    //   starts: 5,
    //   imageUrl: 'https://www.google.com',
    // });
    // await controller.remove(product.id);
    // expect(productUpdated).toBeInstanceOf(Object);
  });

  it('should remove a cart', async () => {
    const newProduct = await productController.create({
      name: 'Product 1',
      price: 100,
      colors: 'Red',
      starts: 5,
      imageUrl: 'https://www.google.com',
    });
    const newProductString = JSON.stringify([newProduct]);
    const cart = await controller.create({
      totalValue: 100,
      userId: '',
      products: newProductString,
    });

    const cartRemoved = await controller.remove(cart.id);
    expect(cartRemoved).toBeFalsy();
  });
});
