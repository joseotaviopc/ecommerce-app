import { User } from './user.entity';

describe('User Entity', () => {
  it('should create a new instance of User', () => {
    const user = new User({
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password',
      createdAt: new Date(),
    });
    expect(user).toBeInstanceOf(User);
    expect(user.id).toBe('1');
    expect(user.name).toBe('John Doe');
    expect(user.email).toBe('john.doe@example.com');
    expect(user.password).toBe('password');
    expect(user.createdAt).toBeInstanceOf(Date);
  });
});
