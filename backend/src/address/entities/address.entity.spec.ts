// import { describe, it, expect } from 'vitest';
import { Address } from './address.entity';

describe('Address Entity', () => {
  it('should create a new instance of Address', () => {
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

    expect(address).toBeInstanceOf(Address);
    expect(address.id).toBe('1');
    expect(address.fullName).toBe('Address 1');
    expect(address.lineOne).toBe('Line One 1');
    expect(address.lineTwo).toBe('Line Two 1');
    expect(address.city).toBe('City 1');
    expect(address.stateOrRegion).toBe('State or Region 1');
    expect(address.zipCpde).toBe('Zip Code 1');
    expect(address.country).toBe('Country 1');
  });
});
