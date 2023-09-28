// auth/auth.service.ts
import { Body, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { registerData } from 'src/applications/dto/registerData';
import { DosenService, MahasiswaService, UserService } from 'src/applications/applications.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/applications/schemas/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
    ) {
    }

  async create(data: any): Promise<User>{
    return this.userRepository.save(data);
  }

  async findOne(condition: any): Promise<User> {
    return this.userRepository.findOne(condition);
  }
}
