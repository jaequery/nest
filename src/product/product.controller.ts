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
  async products() {
    console.log('showing products');    
    return await this.productService.productRepository.find();    
  }

  @Get('both')
  async both() {
    console.log('showing both');    
    const products = await this.productService.productRepository.find();     
    return { products};
  }

  @Get(':id([0-9])')
  async product(@Param('id', ParseIntPipe) id: number,) {
    console.log('showing products');    
    return await this.productService.productRepository.findOne(id);    
  }
  
}
