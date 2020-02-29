import { Inject, Injectable } from '@nestjs/common';
import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { BaseService } from './base.service';

@Injectable()
export class ProductService extends BaseService {
  constructor(
    @InjectRepository(Product) protected readonly productRepository: Repository<Product>,
  ) {
    super(productRepository);
  }

  async findMe() {
    return ['hola'];
  }
}