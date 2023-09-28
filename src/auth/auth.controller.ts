import { Controller, Post, UseGuards, Body, Res, HttpException, HttpStatus, UnauthorizedException, BadRequestException, Get, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private jwtService: JwtService
    ){
    }

  @Post('register')
  async register(
    @Body('name') name: string,
    @Body('email')email: string,
    @Body('password')password: string
    ){
     const hashedPassword = await bcrypt.hash(password, 12);

     const user = await this.authService.create({
      name,
      email,
      password: hashedPassword
     });
     
      delete user.password;

     return user;
  }

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
    @Res({passthrough: true}) response: Response
  ){
    const user = await this.authService.findOne({ where: { email } });

    if(!user) {
      throw new BadRequestException('Invalid Credentials');
    }

    if(!await bcrypt.compare(password, user.password)){
      throw new BadRequestException('Invalid Credentials');
    }

    //Menghasilkan Token
    const jwt = await this.jwtService.signAsync({id: user.id});

    response.cookie('jwt', jwt, {httpOnly: true})

    return {
      message: 'Success'
    };
  }

  @Get('user')
  async user(@Req() request: Request) {
    try {
      const cookie = request.cookies['jwt'];

      //Verifikasi Token
      const data = await this.jwtService.verifyAsync(cookie);

      if(!data){
        throw new UnauthorizedException();
      }

      const user = await this.authService.findOne( {where: {id: data['id']}});

      const {password, ...result} = user;

      return result;
    } catch(e) {
      throw new UnauthorizedException();
    }
  }

  @Post('logout')
  async logout(@Res({passthrough: true}) response: Response){
    response.clearCookie("jwt");

    return {
      message: 'Success'
    }
  }
}
