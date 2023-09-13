import { Body, Controller, Post } from '@nestjs/common';
import { JadwalService, MahasiswaService } from './applications.service';
import { CreateMahasiswa } from './dto/mahasiswa';
import { CreateJadwal } from './dto/jadwal';

@Controller('mahasiswa')
export class MahasiswaController {
  constructor(private mahasiswaService: MahasiswaService) {}
}

@Controller('jadwal')
export class JadwalController {
  constructor(private jadwalService: JadwalService) {}

  @Post("create")
  create(@Body() post: CreateJadwal) {
    return this.jadwalService.create(post);
  }
}
