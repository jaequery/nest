import { Controller, Param, Body, Post, Get, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { UserRegisterDto, UserLoginDto } from './user.dtos';

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
