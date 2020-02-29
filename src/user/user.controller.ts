import { Controller, Body, Param, Post, Get, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './user.dto';

@ApiTags('Users')
@Controller('users')
export class UserController {

  constructor(
    private userService: UserService
  ) { }

  @Get()
  async getUsers() {
    return await this.userService.userRepository.find();    
  }

  @Get(':id([0-9])')
  async getUser(@Param('id', ParseIntPipe) id: number,) {
    return await this.userService.userRepository.findOne(id);    
  }

  @Post()
  async saveUser(@Body() createUserDto: CreateUserDto) {
    return await this.userService.userRepository.save(createUserDto);    
  }


  
}
