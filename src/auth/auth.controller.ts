import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalStrategy)
  async login(@Request() req) {
    // Handle the login logic here (e.g., generating and returning a JWT token)
    const token = await this.authService.login(req.user);
    return { token };
  }

  @Post('register')
  async register(@Body() req){
    this.authService.register(req)
  }
}
