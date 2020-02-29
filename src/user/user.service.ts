import { Inject, Injectable } from '@nestjs/common';
import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AppService } from '../app.service';

import { User } from './user.entity';
import { Product } from '../product/product.entity';

@Injectable()
export class UserService extends AppService {
  
  constructor(
    @InjectRepository(User) protected readonly userRepository: Repository<User>,
    @InjectRepository(Product) protected readonly productRepository: Repository<Product>,
  ) {
    super(userRepository);
  }

  async findBunch() {
    const users = await this.userRepository.find();
    const products = await this.productRepository.find();
    return { users, products };
  }
}