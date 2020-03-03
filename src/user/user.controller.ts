import { Controller, Param, Body, Post, Get, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { UserRegisterDto, UserLoginDto } from './user.dtos';

@ApiTags('Users')
@Controller('users')
export class UserController {

  constructor(
    protected readonly userService: UserService
  ) { }

  @Get()
  async users() {
    console.log('showing users');    
    return await this.userService.findAll();    
  }

  @Get(':id([0-9])')
  async user(@Param('id', ParseIntPipe) id: number,) {
    console.log('showing users');    
    return await this.userService.findById(id);    
  }

  @Post()
  async create(@Body() userRegisterDto: UserRegisterDto) {
    console.log('payload', userRegisterDto);
    const user = this.userService.create(userRegisterDto);
    return user;
  }

  @Post('login')
  async login(@Body() userLoginDto: UserLoginDto) {
    const user = this.userService.login(userLoginDto);
    return user;
  }
  
}
