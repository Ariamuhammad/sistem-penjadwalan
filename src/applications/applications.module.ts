import { Module } from '@nestjs/common';
import { DosenService, JadwalService, MahasiswaService, MataKuliahService, RuanganService, UserService } from './applications.service';
import { DosenController, MahasiswaController, MataKuliahController, RuanganController } from './applications.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mahasiswa } from "./schemas/mahasiswa.entity"
import { User } from './schemas/user.entity';
import { Ruangan } from './schemas/ruangan.entity';
import { MataKuliah } from './schemas/matakuliah.entity';
import { Jadwal } from './schemas/jadwal.entity';
import { Dosen } from './schemas/dosen.entity';

//MAHASISWA
@Module({
  imports: [TypeOrmModule.forFeature([Mahasiswa, User])],
  providers: [MahasiswaService],
  exports: [MahasiswaService],
  controllers: [MahasiswaController],
})
export class MahasiswaModule {}

//DOSEN
@Module({
    imports: [TypeOrmModule.forFeature([Dosen, User])],
    providers: [DosenService],
    exports: [DosenService],
    controllers: [DosenController]
})
export class DosenModule {}

//RUANGAN
@Module({
  imports: [TypeOrmModule.forFeature([Ruangan])],
  providers: [RuanganService],
  exports: [RuanganService],
  controllers: [RuanganController]
})
export class RuanganModule {}

//MATAKULIAH
@Module({
  imports: [TypeOrmModule.forFeature([MataKuliah])],
  providers: [MataKuliahService],
  exports: [MataKuliahService],
  controllers: [MataKuliahController]
})
export class MataKuliahModule {}

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

export default [
    DosenModule,
    MahasiswaModule,
    UserModule,
    JadwalModule,
    RuanganModule,
    MataKuliahModule
    
]
  