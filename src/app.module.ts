import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './modules/products/product.controller';
import { ProductModule } from './modules/products/product.module';
import { UsersModule } from './modules/users/users.module';
import { UsersController } from './modules/users/users.controller';

@Module({
  imports: [
    ProductModule,
    UsersModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(),
  ],
  controllers: [AppController, ProductController, UsersController],
  providers: [AppService],
})
export class AppModule {}
