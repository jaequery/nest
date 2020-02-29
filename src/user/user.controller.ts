import { Controller, Param, Get, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';

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

  @Get('wtf')
  async both() {
    return this.userService.findBunch();
  }

  @Get(':id([0-9])')
  async user(@Param('id', ParseIntPipe) id: number,) {
    console.log('showing users');    
    return await this.userService.findById(id);    
  }
  
}
