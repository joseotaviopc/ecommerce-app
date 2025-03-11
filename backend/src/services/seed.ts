import { faker } from '@faker-js/faker';
import { PrismaService } from './prisma.service';

class SeedDb {
  constructor(private readonly prisma: PrismaService) { }

  async execute() {
    const data = this.generateProducts(20);
    await this.prisma.product.deleteMany();
    await this.prisma.product.createMany({
      data,
    });
  }

  private generateProducts(num: number) {
    const products = [];
    for (let i = 0; i < num; i++) {
      products.push({
        id: faker.database.mongodbObjectId(),
        name: faker.commerce.productName(),
        starts: faker.number.int({ min: 0, max: 5 }),
        colors: faker.color.human(),
        price: Number.parseFloat(faker.commerce.price()),
        imageUrl: faker.image.personPortrait({ size: 128 }),
      });
    }
    return products;
  }
}

const prisma = new PrismaService();
const runSeed = new SeedDb(new PrismaService());
runSeed
  .execute()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
