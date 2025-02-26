import { Product } from 'src/products/entities/product.entity';

export class Cart {
  readonly id: string;
  readonly totalValue: number;
  readonly products: Product[];
  readonly userId: string;
  readonly createdAt: Date;
  readonly updatedAt: Date | null;

  constructor(cart: Cart) {
    this.id = cart.id;
    this.totalValue = cart.totalValue;
    this.products = cart.products;
    this.userId = cart.userId;
    this.createdAt = cart.createdAt;
    this.updatedAt = cart.updatedAt;
  }
}
