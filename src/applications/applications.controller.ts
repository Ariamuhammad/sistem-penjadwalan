import { Body, Controller, Post, Get, Put, Delete, Param, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { DosenService, JadwalService, MahasiswaService, MataKuliahService, RuanganService } from './applications.service';
import { CreateMahasiswa } from './dto/mahasiswa';
import { CreateJadwal } from './dto/jadwal';

//MAHASISWA
@Controller('mahasiswa')
export class MahasiswaController {
  constructor(private mahasiswaService: MahasiswaService) {}

  @Get()
  async findAll() {
    return this.mahasiswaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const mahasiswa = await this.mahasiswaService.findOne(id);

    if (!mahasiswa) {
      throw new NotFoundException('Data mahasiswa tidak ditemukan');
    }
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

//DOSEN
@Controller('dosen')
export class DosenController {
  constructor(private dosenService: DosenService) {}

  @Get()
  async findAll() {
    return this.dosenService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const dosen = await this.dosenService.findOne(id);

    if (!dosen) {
      throw new NotFoundException('Data dosen tidak ditemukan');
    }
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
    dosen.kodeDosen = dosenData.kodeDosen;

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

//RUANGAN
@Controller('ruangan')
export class RuanganController {
  constructor(private ruanganService: RuanganService) {}

  @Get()
  async findAll() {
    return this.ruanganService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const ruangan = await this.ruanganService.findOne(id);

    if (!ruangan) {
      throw new NotFoundException('Data ruangan tidak ditemukan');
    }
    return this.ruanganService.findOne(id);
  }

  @Post()
  async create(@Body() ruanganData: any) {
    return this.ruanganService.create(ruanganData);
  }

  
  @Put(':id')
  async update(@Param('id') id: number, @Body() ruanganData: any) {
    const ruangan = await this.ruanganService.findOne(id);

    // Perbarui bidang-bidang yang diperlukan
    ruangan.nama = ruanganData.nama;
    ruangan.kodeRuangan = ruanganData.kodeRuangan;

    // Simpan pembaruan ke database
    await this.ruanganService.update(id, ruangan);

    // Response
    return { message: 'Data ruangan berhasil diperbarui' };
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    // Temukan data ruangan berdasarkan ID
    const ruangan = await this.ruanganService.findOne(id);

    if (!ruangan) {
      throw new NotFoundException('Data ruangan tidak ditemukan');
    }

    // Hapus data ruangan dari database
    await this.ruanganService.delete(id);

    // Berikan respons yang sesuai
    return { message: 'Data ruangan berhasil dihapus' };
  }

}

//MATAKULIAH
@Controller('mata-kuliah')
export class MataKuliahController {
  constructor(private matkulService: MataKuliahService) {}

  @Get()
  async findAll() {
    return this.matkulService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const matkul = await this.matkulService.findOne(id);

    if (!matkul) {
      throw new NotFoundException('Data Mata Kuliah tidak ditemukan');
    }
    return this.matkulService.findOne(id);
  }

  @Post()
  async create(@Body() matkulData: any) {
    return this.matkulService.create(matkulData);
  }

  
  @Put(':id')
  async update(@Param('id') id: number, @Body() matkulData: any) {
    const matkul = await this.matkulService.findOne(id);

    // Perbarui bidang-bidang yang diperlukan
    matkul.kodeMatakuliah = matkulData.kodeMatakuliah;
    matkul.nama = matkulData.nama;

    // Simpan pembaruan ke database
    await this.matkulService.update(id, matkul);

    // Response
    return { message: 'Data Mata Kuliah berhasil diperbarui' };
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    // Temukan data Mata Kuliah berdasarkan ID
    const matkul = await this.matkulService.findOne(id);

    if (!matkul) {
      throw new NotFoundException('Data Mata Kuliah tidak ditemukan');
    }

    // Hapus data Mata Kuliah dari database
    await this.matkulService.delete(id);

    // Berikan respons yang sesuai
    return { message: 'Data Mata Kuliah berhasil dihapus' };
  }

}


@Controller('jadwal')
export class JadwalController {
  constructor(private jadwalService: JadwalService) {}

  @Get()
  async findAll() {
    const jadwal = await this.jadwalService.findAll();
    return jadwal;
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const matkul = await this.jadwalService.findOne(id);

    if (!matkul) {
      throw new NotFoundException('Data Jadwal tidak ditemukan');
    }
    return this.jadwalService.findOne(id);
  }

  @Post()
  async create(@Body() createJadwal : CreateJadwal) {
    try {
      const jadwal = await this.jadwalService.create(createJadwal);
      return jadwal;
    } catch (error) {
      if (error.code === '23505') {
        // Penanganan error untuk duplikasi
        throw new HttpException('Data sudah ada', HttpStatus.CONFLICT);
      } else {
        throw new HttpException('Terjadi kesalahan', HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }
  
  @Put(':id')
  async update(@Param('id') id: number, @Body() jadwalData: any) {
    const jadwal = await this.jadwalService.findOne(id);

    // Perbarui bidang-bidang yang diperlukan
    jadwal.dosen = jadwalData.dosen;
    jadwal.mataKuliah = jadwalData.mataKuliah;
    jadwal.ruangan = jadwalData.ruangan;
    jadwal.waktuMulai = jadwalData.waktuMulai;
    jadwal.waktuSelesai = jadwalData.waktuSelesai;

    // Simpan pembaruan ke database
    await this.jadwalService.update(id, jadwal);

    // Berikan respons yang sesuai
    return { message: 'Data Jadwal berhasil diperbarui' };
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    // Temukan data Jadwal berdasarkan ID
    const jadwal = await this.jadwalService.findOne(id);

    if (!jadwal) {
      throw new NotFoundException('Data Jadwal tidak ditemukan');
    }

    // Hapus data Jadwal dari database
    await this.jadwalService.delete(id);

    // Berikan respons yang sesuai
    return { message: 'Data Jadwal berhasil dihapus' };
  }

}
