import { Injectable } from '@nestjs/common';
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

//MAHASISWA
@Injectable()
export class MahasiswaService {
  
  constructor(
    @InjectRepository(Mahasiswa)
    private readonly mahasiswaRepository: Repository<Mahasiswa>,
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

@Injectable()
export class JadwalService {
  constructor(
    @InjectRepository(Jadwal)
    private readonly jadwalRepository: Repository<Jadwal>,
  ) {}

  create(jadwal: CreateJadwal): Observable<CreateJadwal> {
    return from(this.jadwalRepository.save(jadwal));
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
