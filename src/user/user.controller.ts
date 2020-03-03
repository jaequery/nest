import { Controller, Param, Body, Post, Get, ParseIntPipe } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { UserRegisterDto, UserLoginDto } from './user.dtos';

@ApiTags('Users')
@Controller('users')
export class UserController {

  constructor(
    private userService: UserService
  ) { }

  @Get()
  @ApiOperation({ summary: 'retrieves a list' })
  async getAll() {
    const opts = {limit: 10};
    return await this.userService.findAll(opts);    
  }

  @Get(':id([0-9])')
  @ApiOperation({ summary: 'retrieves a record' })
  async getOne(@Param('id', ParseIntPipe) id: number,) {
    return await this.userService.userRepository.findOne(id);    
  }

  @Post()
  @ApiOperation({ summary: 'creates a record' })
  async create(@Body() userRegisterDto: UserRegisterDto) {
    console.log('payload', userRegisterDto);
    const user = this.userService.create(userRegisterDto);
    return user;
  }

  @Post('login')
  @ApiOperation({ summary: 'authenticate user login' })
  async login(@Body() userLoginDto: UserLoginDto) {
    const user = this.userService.login(userLoginDto);
    return user;
  }
  
}
