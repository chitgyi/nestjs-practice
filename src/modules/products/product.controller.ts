import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Product } from 'src/database/entities/product.entity';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly service: ProductService) {}

  @Post()
  async insert(@Body() product: Product): Promise<any> {
    return this.service.insert(product);
  }

  @Get()
  async find(): Promise<any> {
    return await this.service.products();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<any> {
    return await this.service.productBy(id);
  }
}
