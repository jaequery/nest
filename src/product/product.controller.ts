import { Controller, Param, Body, Post, Get, ParseIntPipe } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { FindAllDto } from '../app.dtos';
import { ProductService } from './product.service';

@ApiTags('Products')
@Controller('products')
export class ProductController {

  constructor(
    private productService: ProductService
  ) { }

  @Get()
  @ApiOperation({ summary: 'retrieves a list' })
  async getAll(@Param() findAllDto: FindAllDto) {
    return await this.productService.findAll(findAllDto);
  }
  
  @Get(':id([0-9])')
  @ApiOperation({ summary: 'retrieves a record' })
  async getOne(@Param('id', ParseIntPipe) id: number,) {
    return await this.productService.productRepository.findOne(id);    
  }
  
}
