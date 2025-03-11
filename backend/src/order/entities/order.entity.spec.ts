// import { describe, it, expect } from 'vitest';
import { Address } from 'src/address/entities/address.entity';
import { Order } from './order.entity';

describe('Order Entity', () => {
  it('should create a new instance of Order', () => {
    const address = new Address({
      id: '1',
      fullName: 'Address 1',
      lineOne: 'Line One 1',
      lineTwo: 'Line Two 1',
      city: 'City 1',
      stateOrRegion: 'State or Region 1',
      zipCpde: 'Zip Code 1',
      country: 'Country 1',
    });
    const order = new Order({
      id: '1',
      paymentMethod: 'Credit Card',
      cartId: '1',
      addressId: '1',
      shippingAddress: address,
      createdAt: new Date(),
    });

    expect(order).toBeInstanceOf(Order);
    expect(order.id).toBe('1');
    expect(order.paymentMethod).toBe('Credit Card');
    expect(order.cartId).toBe('1');
    expect(order.addressId).toBe('1');
    expect(order.shippingAddress).toBe(address);
    expect(order.createdAt).toBeInstanceOf(Date);
  });
});
