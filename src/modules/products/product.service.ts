import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/database/entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {}
  async insert(product: Product): Promise<Product> {
    return await this.productRepo.save(product);
  }

  async products(): Promise<Product[]> {
    return await this.productRepo.find();
  }

  async productBy(id: number): Promise<Product> {
    return await this.productRepo.findOne(id);
  }
}
