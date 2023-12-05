import { CreateUserDto } from './create-user.dto';
import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './update-user.dto';

@Injectable()
export class UserService {
  private users = [
    { id: 0, name: 'john', role: 'developer' },
    { id: 1, name: 'jane', role: 'tester' },
  ];

  getUsers(role?: 'developer' | 'tester') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  getUser(id: number) {
    const user = this.users.find((user) => user.id === id);
    console.log(user);
    if (!user) {
      throw new Error('user not found');
    }
    return user;
  }

  createUser(createUserDto: CreateUserDto) {
    const newUser = {
      ...createUserDto,
      id: Date.now(),
    };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUserDto };
      }
      return user;
    });
    return this.getUser(id);
  }

  removeUser(id: number) {
    const toBeRemoved = this.getUser(id);
    this.users = this.users.filter((user) => user.id !== id);
    return toBeRemoved;
  }
}
