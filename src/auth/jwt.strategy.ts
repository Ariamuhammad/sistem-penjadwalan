// auth/jwt.strategy.ts
import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtPayload } from './jwt-payload.interface'; // Define your payload interface

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'your-secret-key', // Replace with your actual secret key
    });
  }

  async validate(payload: JwtPayload) {
    // Implement user validation logic here (e.g., checking if user exists)
    // If the user is not valid, throw an UnauthorizedException
    let validUser = payload.username;

    if (!validUser) {
      throw new UnauthorizedException();
    }
    return payload; // Return the payload (user) if valid
  }
}
