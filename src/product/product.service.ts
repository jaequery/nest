import { Inject, Injectable } from '@nestjs/common';
import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { AppService } from '../app.service';

@Injectable()
export class ProductService extends AppService {
  constructor(
    @InjectRepository(Product) protected readonly productRepository: Repository<Product>,
  ) {
    super(productRepository);
  }

}