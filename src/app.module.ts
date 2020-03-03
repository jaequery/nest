import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductController } from './product/product.controller';
import { Product } from './product/product.entity';
import { ProductService } from './product/product.service';

import { User } from './user/user.entity';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT as any,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [
        __dirname + '/**/*.entity{.ts,.js}',
      ],
      synchronize: true,
      logging: false
    }),
    TypeOrmModule.forFeature([
      Product, User
    ])
  ],
  controllers: [
    ProductController, UserController
  ],
  providers: [
    ProductService, UserService
  ],
})
export class AppModule { }
