import { Inject, Injectable } from '@nestjs/common';
import { Repository, UpdateResult } from 'typeorm';
import { AppService } from '../app.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService extends AppService {

  constructor(
    @InjectRepository(Product) public productRepository: Repository<Product>
  ) { 
    super(productRepository);
  }

}