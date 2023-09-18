// auth/auth.service.ts
import { Body, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';
import { registerData } from 'src/applications/dto/registerData';
import { DosenService, MahasiswaService, UserService } from 'src/applications/applications.service';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, 
    private userService: UserService, 
    private mahasiswaService: MahasiswaService,
    private dosenService: DosenService
    ) {}

  async login(user: JwtPayload) {
    const payload: JwtPayload = { username: user.username, password: user.password };
    const token = this.jwtService.sign(payload); // Generate JWT token
    return token;
  }

  async register({data: dataRegistrasi}:  registerData) {

    dataRegistrasi._user?.id && delete dataRegistrasi._user.id;

    let keys = Object.keys(dataRegistrasi)
    const err = {status: "error", msg: "Unable to register"};

    // if (!(keys.includes("mahasiswa")) && !(keys.includes("dosen"))) {
    //     return err
    // }
   
    let user = await this.userService.create(dataRegistrasi._user);
    if (!user){
        return err
    }


    // if (dataRegistrasi._user.role === "mahasiswa") {
    //     if (!(await this.mahasiswaService.create(dataRegistrasi.mahasiswa, user.id))) {
    //         return err
    //     }
    // }

    // if (dataRegistrasi._user.role === "dosen") {
    //     if (!(await this.dosenService.create(dataRegistrasi.dosen, user.id))){
    //         return err
    //     }
    // }

    return user;
  }
}
