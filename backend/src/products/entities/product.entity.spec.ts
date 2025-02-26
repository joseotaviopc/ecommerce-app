import { Product } from './product.entity';

describe('Product Entity', () => {
  it('should create a new instance of Product', () => {
    const product = new Product({
      id: '1',
      name: 'Product 1',
      price: 100,
      colors: 'Red',
      starts: 5,
      imageUrl: 'https://www.google.com',
      cartId: '2',
      createdAt: new Date(),
    });
    expect(product).toBeInstanceOf(Product);
    expect(product.id).toBe('1');
    expect(product.name).toBe('Product 1');
    expect(product.price).toBe(100);
    expect(String(product.colors)).toBe('Red');
    expect(product.starts).toBe(5);
    expect(product.imageUrl).toBe('https://www.google.com');
    expect(product.cartId).toBe('2');
    expect(product.createdAt).toBeInstanceOf(Date);
  });
});
