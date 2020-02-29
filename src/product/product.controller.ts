import { Controller, Param, Get, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductService } from './product.service';

@ApiTags('Products')
@Controller('products')
export class ProductController {

  constructor(
    private productService: ProductService
  ) { }

  @Get()
  async getProducts() {
    return await this.productService.productRepository.find();    
  }

  @Get('hello')
  hello(){
    return "hello";
  }


  @Get('something')
  something () {
    return { name: 'some thing' };
  }

  @Get(':id([0-9])')
  async getProduct(@Param('id', ParseIntPipe) id: number,) {
    return await this.productService.productRepository.findOne(id);    
  }
  
}
