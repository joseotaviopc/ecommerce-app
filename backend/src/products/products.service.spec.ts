import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { PrismaService } from '../services/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsService, PrismaService],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a product', async () => {
    const newProduct = new CreateProductDto({
      name: 'Product 1',
      price: 100,
      colors: 'Red',
      starts: 5,
      imageUrl: 'https://www.google.com',
    });
    const productCreated = await service.create(newProduct);

    expect(productCreated).toBeInstanceOf(Object);
    expect(productCreated.createdAt).toBeInstanceOf(Date);
    expect(productCreated.name).toBe('Product 1');
    expect(productCreated.price).toBe(100);
    expect(String(productCreated.colors)).toBe('Red');
    expect(productCreated.starts).toBe(5);
    expect(productCreated.imageUrl).toBe('https://www.google.com');

    await service.remove(productCreated.id);
  });

  it('should find all products', async () => {
    const products = await service.findAll();
    expect(products).toBeInstanceOf(Array);
  });

  it('should find a product by id', async () => {
    const newProduct = new CreateProductDto({
      name: 'Product 1',
      price: 100,
      colors: 'Red',
      starts: 5,
      imageUrl: 'https://www.google.com',
    });
    const productCreated = await service.create(newProduct);

    const product = await service.findOne(productCreated.id);
    await service.remove(productCreated.id);

    expect(product).toBeInstanceOf(Object);
    expect(product?.createdAt).toBeInstanceOf(Date);
    expect(product?.name).toBe('Product 1');
    expect(product?.price).toBe(100);
    expect(String(product?.colors)).toBe('Red');
    expect(product?.starts).toBe(5);
    expect(product?.imageUrl).toBe('https://www.google.com');
  });

  it('should return null when not find a product by id', async () => {
    const product = await service.findOne('invalid-id');
    expect(product).toBeNull();
  });

  it('should remove a product', async () => {
    const newProduct = new CreateProductDto({
      name: 'Product 1',
      price: 100,
      colors: 'Red',
      starts: 5,
      imageUrl: 'https://www.google.com',
    });
    const productCreated = await service.create(newProduct);
    await service.remove(productCreated.id);

    const product = await service.findOne(productCreated.id);

    expect(product).toBeNull();
    expect(product?.createdAt).not.toBeInstanceOf(Date);
    expect(product?.name).not.toBe('Product 1');
    expect(product?.price).not.toBe(100);
    expect(String(product?.colors)).not.toBe('Red');
    expect(product?.starts).not.toBe(5);
    expect(product?.imageUrl).not.toBe('https://www.google.com');
  });

  it('should return null when not find a product to remove', async () => {
    const product = await service.remove('invalid-id');
    expect(product).toBeNull();
  });

  it('should update a product', async () => {
    const newProduct = new CreateProductDto({
      name: 'Product 1',
      price: 100,
      colors: 'Red',
      starts: 5,
      imageUrl: 'https://www.google.com',
    });
    const productCreated = await service.create(newProduct);

    const productUpdated = await service.update({
      id: productCreated.id,
      updateProductDto: {
        name: 'Product 1 Updated',
        price: 200,
        colors: 'Blue',
      },
    });

    await service.remove(productCreated.id);
    expect(productUpdated).toBeInstanceOf(Object);
    expect(productUpdated?.createdAt).toBeInstanceOf(Date);
    expect(productUpdated?.name).toBe('Product 1 Updated');
    expect(productUpdated?.price).toBe(200);
    expect(String(productUpdated?.colors)).toBe('Blue');
  });

  it('should return null when not find a product to update', async () => {
    const product = await service.update({
      id: 'invalid-id',
      updateProductDto: {
        name: 'John Doe Updated',
        price: 200,
        colors: 'Blue',
      },
    });
    expect(product).toBeNull();
  });
});
