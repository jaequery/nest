import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './product/product.controller';
import { Product } from './product/product.entity';
import { ProductService } from './product/product.service';

import { User } from './user/user.entity';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost.docker',
      port: 5432,
      username: 'root',
      password: '',
      database: 'jae',
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
