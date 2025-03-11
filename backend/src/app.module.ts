import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';
import { AddressModule } from './address/address.module';

@Module({
  imports: [UsersModule, ProductsModule, CartModule, OrderModule, AddressModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
