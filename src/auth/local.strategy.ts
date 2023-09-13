import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/applications/schemas/user.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(User)
    private readonly user: Repository<User>,
  ) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    let user = await this.user.findOne({ where: { username } })
    if (!user || user.password === password) {
      throw new UnauthorizedException();
    }
    return user;
  }
}