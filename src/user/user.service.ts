import { Inject, Injectable } from '@nestjs/common';
import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Util } from '../util';

import { User } from './user.entity';
import { Product } from '../product/product.entity';

const util = new Util;

@Injectable()
export class UserService {
  
  constructor(
    @InjectRepository(User) public userRepository: Repository<User>,
    @InjectRepository(Product) public productRepository: Repository<Product>
  ) { }

  async findBunch() {
    const users = await this.userRepository.find();
    const products = await this.productRepository.find();
    
    
    const email = util.sendEmail();
    return { users, products, email };
  }
}