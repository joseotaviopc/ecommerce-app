export class User {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly createdAt: Date;

  constructor(user: User) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
    this.createdAt = user.createdAt;
  }
}
