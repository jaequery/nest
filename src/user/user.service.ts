import { Inject, Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcryptjs';

import { User } from './user.entity';
import { UserLoginDto, UserRegisterDto } from './user.dtos';
import { Product } from '../product/product.entity';

import { Util } from '../util';
const util = new Util;

@Injectable()
export class UserService {
  
  constructor(
    @InjectRepository(User) public userRepository: Repository<User>,
    @InjectRepository(Product) public productRepository: Repository<Product>
  ) { }

  async login(userLoginDto: UserLoginDto) {
    const user = await this.userRepository.createQueryBuilder('user').where("email = :email").setParameters({email: userLoginDto.email}).getOne();   
    if (await bcrypt.compare(userLoginDto.password, user.password)){
      return user;      
    }
    throw new UnauthorizedException;
  }

  async create(userRegisterDto: UserRegisterDto){    
    const user = await this.userRepository.findOne({where: {email: userRegisterDto.email}});
    if(user) throw new BadRequestException('duplicate error');

    const data = {      
      email: userRegisterDto.email,
      password: userRegisterDto.password,
      first_name: userRegisterDto.first_name,
      last_name: userRegisterDto.last_name
    }
    data.password = await bcrypt.hash(userRegisterDto.password, 14);

    try {
      const user = await this.userRepository.save(data);      
      return user;
    } catch (e) {      
      throw e;
    }
    
  }
  
}