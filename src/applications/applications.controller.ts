import { Body, Controller, Post, Get, Put, Delete, Param, NotFoundException } from '@nestjs/common';
import { DosenService, JadwalService, MahasiswaService } from './applications.service';
import { CreateMahasiswa } from './dto/mahasiswa';
import { CreateJadwal } from './dto/jadwal';

@Controller('mahasiswa')
export class MahasiswaController {
  constructor(private mahasiswaService: MahasiswaService) {}

  @Get()
  async findAll() {
    return this.mahasiswaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.mahasiswaService.findOne(id);
  }

  @Post()
  async create(@Body() mahasiswaData: any) {
    return this.mahasiswaService.create(mahasiswaData);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() mahasiswaData: any) {
    const mahasiswa = await this.mahasiswaService.findOne(id);

    // Perbarui bidang-bidang yang diperlukan
    mahasiswa.nama = mahasiswaData.nama;
    mahasiswa.nim = mahasiswaData.nim;

    // Simpan pembaruan ke database
    await this.mahasiswaService.update(id, mahasiswa);

    // Berikan respons yang sesuai
    return { message: 'Data mahasiswa berhasil diperbarui' };
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    // Temukan data mahasiswa berdasarkan ID
    const mahasiswa = await this.mahasiswaService.findOne(id);

    if (!mahasiswa) {
      throw new NotFoundException('Data mahasiswa tidak ditemukan');
    }

    // Hapus data mahasiswa dari database
    await this.mahasiswaService.delete(id);

    // Berikan respons yang sesuai
    return { message: 'Data mahasiswa berhasil dihapus' };
  }
}

@Controller('dosen')
export class DosenController {
  constructor(private dosenService: DosenService) {}

  @Get()
  async findAll() {
    return this.dosenService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.dosenService.findOne(id);
  }

  @Post()
  async create(@Body() dosenData: any) {
    return this.dosenService.create(dosenData);
  }

  
  @Put(':id')
  async update(@Param('id') id: number, @Body() dosenData: any) {
    const dosen = await this.dosenService.findOne(id);

    // Perbarui bidang-bidang yang diperlukan
    dosen.nama = dosenData.nama;
    dosen.nip = dosenData.nip;

    // Simpan pembaruan ke database
    await this.dosenService.update(id, dosen);

    // Berikan respons yang sesuai
    return { message: 'Data dosen berhasil diperbarui' };
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    // Temukan data dosen berdasarkan ID
    const dosen = await this.dosenService.findOne(id);

    if (!dosen) {
      throw new NotFoundException('Data dosen tidak ditemukan');
    }

    // Hapus data dosen dari database
    await this.dosenService.delete(id);

    // Berikan respons yang sesuai
    return { message: 'Data dosen berhasil dihapus' };
  }

}

@Controller('jadwal')
export class JadwalController {
  constructor(private jadwalService: JadwalService) {}

  @Post("create")
  create(@Body() post: CreateJadwal) {
    return this.jadwalService.create(post);
  }
}
