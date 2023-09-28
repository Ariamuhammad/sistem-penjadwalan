import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { DosenModule, MahasiswaModule, UserModule } from 'src/applications/applications.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/applications/schemas/user.entity';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { jwtConstants } from './jwt.constants';

@Module({
    imports: [
        PassportModule,
        UserModule, 
        MahasiswaModule, 
        DosenModule,
        TypeOrmModule.forFeature([User]),
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '1h' }
        })],
    providers: [AuthService, JwtStrategy],
    controllers: [AuthController]
})
export class AuthModule {}
