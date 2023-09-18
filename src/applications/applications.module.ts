import { Module } from '@nestjs/common';
import { DosenService, JadwalService, MahasiswaService, UserService } from './applications.service';
import { DosenController, MahasiswaController } from './applications.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mahasiswa } from "./schemas/mahasiswa.entity"
import { User } from './schemas/user.entity';
import { Ruangan } from './schemas/ruangan.entity';
import { MataKuliah } from './schemas/matakuliah.entity';
import { Jadwal } from './schemas/jadwal.entity';
import { Dosen } from './schemas/dosen.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mahasiswa, User])],
  providers: [MahasiswaService],
  exports: [MahasiswaService],
  controllers: [MahasiswaController],
})
export class MahasiswaModule {}

@Module({
    imports: [TypeOrmModule.forFeature([Jadwal, Mahasiswa, Dosen, User])],
    providers: [JadwalService],
    controllers: [],
  })
  export class JadwalModule {}

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule {}

@Module({
    imports: [TypeOrmModule.forFeature([Dosen, User])],
    providers: [DosenService],
    exports: [DosenService],
    controllers: [DosenController]
})
export class DosenModule {}


export default [
    MahasiswaModule,
    UserModule,
    JadwalModule,
    DosenModule
]
  