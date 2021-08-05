import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  index() {
    return {
      message: 'NestJS Testing...\n New Framework',
      products: [
        { name: 'Product One...', detail: 'Product One Detail...' },
        { name: 'Product Two...', detail: 'Product Two Detail...' },
      ],
    };
  }
}
