import { Controller, Param, Get, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductService } from './product.service';

@ApiTags('Products')
@Controller('products')
export class ProductController {

  constructor(
    protected readonly productService: ProductService
  ) { }

  @Get()
  async products() {
    console.log('showing products');    
    return await this.productService.findAll();    
  }

  @Get('both')
  async both() {
    console.log('showing both');    
    const products = await this.productService.findAll();     
    return { products};
  }

  @Get(':id([0-9])')
  async product(@Param('id', ParseIntPipe) id: number,) {
    console.log('showing products');    
    return await this.productService.findById(id);    
  }
  
}
