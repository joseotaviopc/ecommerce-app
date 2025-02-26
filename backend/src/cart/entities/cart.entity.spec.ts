import { Cart } from './cart.entity';

describe('Cart Entity', () => {
  it('should create a new instance of Cart', () => {
    const cart = new Cart({
      id: '1',
      totalValue: 100,
      userId: '',
      products: [],
      createdAt: new Date(),
      updatedAt: null,
    });

    expect(cart).toBeInstanceOf(Cart);
    expect(cart.id).toBe('1');
    expect(cart.totalValue).toBe(100);
    expect(cart.userId).toBe('');
    expect(cart.products).toEqual([]);
    expect(cart.createdAt).toBeInstanceOf(Date);
    expect(cart.updatedAt).toBeNull();
  });
});
