import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  async users(): Promise<User[]> {
    return await this.userRepo.find();
  }

  async insert(user: User): Promise<User> {
    return await this.userRepo.save(user);
  }

  async findOne(id: number): Promise<User> {
    return this.userRepo.findOne(id);
  }
}
