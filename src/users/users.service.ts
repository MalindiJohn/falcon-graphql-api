import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {

  private readonly users = [
    { 
      id:1,
      username: 'malindi',
      password: 'password'
    },
    {
      id:2,
      username: 'mary',
      password: 'password'

    }
  ]

  create(createUserInput: CreateUserInput) {

    const user = {
      ...createUserInput,
      id: this.users.length + 1
    };

    this.users.push(user);

    console.log(this.users);

    return user;
  }

  findAll() {

    //return all users
    return this.users;
    
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  logIn(username: string){

    return this.users.find((user) => user.username === username);
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
