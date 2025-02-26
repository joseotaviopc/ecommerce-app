export class Product {
  readonly id: string;
  readonly name: string;
  readonly starts: number;
  readonly colors: string;
  readonly price: number;
  readonly imageUrl: string;
  readonly cartId: string | null;
  readonly createdAt: Date;

  constructor(product: Product) {
    this.id = product.id;
    this.name = product.name;
    this.starts = product.starts;
    this.colors = product.colors;
    this.price = product.price;
    this.imageUrl = product.imageUrl;
    this.cartId = product.cartId;
    this.createdAt = product.createdAt;
  }
}
