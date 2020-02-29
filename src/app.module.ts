import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductController } from './product.controller';
import { Product } from './product.entity';
import { ProductService } from './product.service';

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
        __dirname + '/*.entity{.ts,.js}',
      ],
      synchronize: true,
      logging: true
    }),
    TypeOrmModule.forFeature([Product])    
  ],
  controllers: [
    ProductController
  ],
  providers: [
    ProductService
  ],
})
export class AppModule { }
