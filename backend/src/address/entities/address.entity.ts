export class Address {
  readonly id: string;
  readonly fullName: string;
  readonly lineOne: string;
  readonly lineTwo: string;
  readonly city: string;
  readonly stateOrRegion: string;
  readonly zipCpde: string;
  readonly country: string;

  constructor(address: Address) {
    this.id = address.id;
    this.fullName = address.fullName;
    this.lineOne = address.lineOne;
    this.lineTwo = address.lineTwo;
    this.city = address.city;
    this.stateOrRegion = address.stateOrRegion;
    this.zipCpde = address.zipCpde;
    this.country = address.country;
  }
}
