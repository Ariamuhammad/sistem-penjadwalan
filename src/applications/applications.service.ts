import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Observable, from } from 'rxjs';

import { Mahasiswa } from './schemas/mahasiswa.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMahasiswa } from './dto/mahasiswa';
import { User } from './schemas/user.entity';
import { Jadwal } from './schemas/jadwal.entity';
import { CreateJadwal } from './dto/jadwal';
import { Dosen } from './schemas/dosen.entity';
import { CreateDosen } from './dto/dosen';
import { Ruangan } from './schemas/ruangan.entity';
import { RuanganPost } from './dto/ruangan';
import { MataKuliah } from './schemas/matakuliah.entity';
import { CreateMataKuliah } from './dto/matakuliah';

//MAHASISWA
@Injectable()
export class MahasiswaService {
  
  constructor(
    @InjectRepository(Mahasiswa)
    private readonly mahasiswaRepository: Repository<Mahasiswa>,
    @InjectRepository(Dosen)
    private readonly dosenRepository: Repository<Dosen>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<Mahasiswa[]> {
    return this.mahasiswaRepository.find();
  }

  async findOne(id: number): Promise<Mahasiswa> {
    return this.mahasiswaRepository.findOne({ where: { id } });
  }

  async create(data: CreateMahasiswa) {
    return await this.mahasiswaRepository.save({...data});

  }

  async update(id: number, mahasiswaData: Mahasiswa): Promise<Mahasiswa> {
    return this.mahasiswaRepository.save({ id, ...mahasiswaData });
  }

  async delete(id: number): Promise<void> {
    await this.mahasiswaRepository.delete(id);
  }
}


//DOSEN
@Injectable()
export class DosenService {
  constructor(
    @InjectRepository(Dosen)
    private readonly dosenRepository: Repository<Dosen>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<Dosen[]> {
    return this.dosenRepository.find();
  }

  async findOne(id: number): Promise<Dosen> {
    return this.dosenRepository.findOne({ where: { id } });
  }

  async create(data: CreateDosen) {
    return await this.dosenRepository.save({...data});
  }

  async update(id: number, dosenData: Dosen): Promise<Dosen> {
    return this.dosenRepository.save({ id, ...dosenData });
  }

  async delete(id: number): Promise<void> {
    await this.dosenRepository.delete(id);
  }

}

//RUANGAN
@Injectable()
export class RuanganService {
  
  constructor(
    @InjectRepository(Ruangan)
    private readonly ruanganRepository: Repository<Ruangan>,
  ) {}

  async findAll(): Promise<Ruangan[]> {
    return this.ruanganRepository.find();
  }

  async findOne(id: number): Promise<Ruangan> {
    return this.ruanganRepository.findOne({ where: { id } });
  }

  async create(data: RuanganPost) {
    return await this.ruanganRepository.save({...data});
    
  }

  async update(id: number, ruanganData: Ruangan): Promise<Ruangan> {
    return this.ruanganRepository.save({ id, ...ruanganData });
  }

  async delete(id: number): Promise<void> {
    await this.ruanganRepository.delete(id);
  }
}

//MATAKULIAH
@Injectable()
export class MataKuliahService {
  
  constructor(
    @InjectRepository(MataKuliah)
    private readonly matkulRepository: Repository<MataKuliah>,
  ) {}

  async findAll(): Promise<MataKuliah[]> {
    return this.matkulRepository.find();
  }

  async findOne(id: number): Promise<MataKuliah> {
    return this.matkulRepository.findOne({ where: { id } });
  }

  async create(data: CreateMataKuliah) {
    return await this.matkulRepository.save({...data});
    
  }

  async update(id: number, matkulData: MataKuliah): Promise<MataKuliah> {
    return this.matkulRepository.save({ id, ...matkulData });
  }

  async delete(id: number): Promise<void> {
    await this.matkulRepository.delete(id);
  }
}

@Injectable()
export class JadwalService {
  constructor(
    @InjectRepository(Jadwal)
    private readonly jadwalRepository: Repository<Jadwal>,
    @InjectRepository(Dosen) // Import dan inject entitas Dosen
    private readonly dosenRepository: Repository<Dosen>,
    @InjectRepository(Ruangan) // Import dan inject entitas Ruangan
    private readonly ruanganRepository: Repository<Ruangan>,
    @InjectRepository(MataKuliah) // Import dan inject entitas MataKuliah
    private readonly mataKuliahRepository: Repository<MataKuliah>,
  ) {}

  async findAll(): Promise<Jadwal[]> {
    return this.jadwalRepository.find({
      relations: ['dosen', 'mataKuliah', 'ruangan'],
      select: ['id', 'waktuMulai', 'waktuSelesai'],
    });
  }

  async findOne(id: number): Promise<Jadwal> {
    return this.jadwalRepository.findOne({ where: { id } });
  }

  // Fungsi untuk mencari entitas Dosen berdasarkan ID
  async findDosenById(id: number) {
    return this.dosenRepository.findOne({ where: { id } });
  }

  // Fungsi untuk mencari entitas Ruangan berdasarkan ID
  async findRuanganById(id: number) {
    return this.ruanganRepository.findOne({ where: { id } });
  }

  // Fungsi untuk mencari entitas Mata Kuliah berdasarkan ID
  async findMataKuliahById(id: number) {
    return this.mataKuliahRepository.findOne({ where: { id } });
  }

  async create(createJadwal: CreateJadwal): Promise<Jadwal> {
    // Cari entitas Dosen, Ruangan, dan Mata Kuliah berdasarkan ID
    const dosen = await this.findDosenById(createJadwal.dosen);
    const ruangan = await this.findRuanganById(createJadwal.ruangan);
    const mataKuliah = await this.findMataKuliahById(createJadwal.mataKuliah);

    if (!dosen || !ruangan || !mataKuliah) {
      throw new NotFoundException('Dosen, Ruangan, atau Mata Kuliah tidak ditemukan');
    }

    // Buat jadwal baru dan hubungkan dengan entitas yang sudah ada
    const jadwal = new Jadwal();
    jadwal.dosen = dosen;
    jadwal.ruangan = ruangan;
    jadwal.mataKuliah = mataKuliah;
    jadwal.waktuMulai = createJadwal.waktuMulai;
    jadwal.waktuSelesai = createJadwal.waktuSelesai;

    // Simpan jadwal ke database
    return this.jadwalRepository.save(jadwal);
  }

  async update(id: number, jadwal: Jadwal): Promise<Jadwal> {
    return this.jadwalRepository.save({ id, ...jadwal });
  }

  async delete(id: number): Promise<void> {
    await this.jadwalRepository.delete(id);
  }
}

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly UserRepository: Repository<User>
    ) {}

    async create(data: User) {
        return await this.UserRepository.save(data)
    }
}
