import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from 'src/database/entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}
  @Get()
  async find(): Promise<any> {
    return await this.service.users();
  }

  @Post()
  async store(@Body() user: User): Promise<any> {
    return await this.service.insert(user);
  }

  @Get(':id')
  async show(@Param('id') id: number): Promise<any> {
    return await this.service.findOne(id);
  }
}
