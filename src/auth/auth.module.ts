import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { DosenModule, MahasiswaModule, UserModule } from 'src/applications/applications.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/applications/schemas/user.entity';
import { AuthController } from './auth.controller';

@Module({
    imports: [
        PassportModule,
        UserModule, 
        MahasiswaModule, 
        DosenModule,
        TypeOrmModule.forFeature([User]),
        JwtModule.register({
            secret: 'your-secret-key', // Replace with your actual secret key
            signOptions: { expiresIn: '1h' }, // Token expiration time
        })],
    providers: [AuthService, LocalStrategy],
    controllers: [AuthController]
})
export class AuthModule {}
