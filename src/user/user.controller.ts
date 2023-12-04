import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Get()
  // getUsers() {
  //   return ['john', 'jane'];
  // }

  // accessing query
  @Get()
  getUsers(@Query('type') type: string) {
    console.log(type);
    return ['john', type];
  }

  // accessing params
  @Get(':id')
  getOneUser(@Param('id') id: string) {
    console.log(id);
    return { name: 'jane', id };
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return {
      name: createUserDto.name,
      id: createUserDto.id,
    };
  }
}
