import { Controller, Param, Get, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';

@ApiTags('Users')
@Controller('users')
export class UserController {

  constructor(
    private userService: UserService
  ) { }

  @Get()
  async users() {
    return await this.userService.userRepository.find();    
  }

  @Get('something')
  something () {
    return { name: 'some thing' };
  }

  @Get('bunch')
  async bunch() {
    return this.userService.findBunch();
  }

  @Get(':id([0-9])')
  async user(@Param('id', ParseIntPipe) id: number,) {
    return await this.userService.userRepository.findOne(id);    
  }
  
}
