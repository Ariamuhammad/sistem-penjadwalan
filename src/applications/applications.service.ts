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

@Injectable()
export class MahasiswaService {
  constructor(
    @InjectRepository(Mahasiswa)
    private readonly mahasiswaRepository: Repository<Mahasiswa>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(data: CreateMahasiswa, id: number) {
    let user = await this.userRepository.findOne({ where: { id }})
    return await this.mahasiswaRepository.save({...data, user });
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

@Injectable()
export class DosenService {
  constructor(
    @InjectRepository(Dosen)
    private readonly dosenRepository: Repository<Dosen>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(data: CreateDosen, id: number) {
    let user = await this.userRepository.findOne({ where: { id } })
    return await this.dosenRepository.save({...data, user});
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
