import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Observable, from } from 'rxjs';

import { MahasiswaPostEntity } from '../models/postEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { MahasiswaPost } from '../models/postInterface';

@Injectable()
export class MahasiswaService {
  constructor(
    @InjectRepository(MahasiswaPostEntity)
    private readonly mahasiswaPostRepository: Repository<MahasiswaPostEntity>,
  ) {}

  createPost(mahasiswaPost: MahasiswaPost): Observable<MahasiswaPost> {
    return from(this.mahasiswaPostRepository.save(mahasiswaPost));
  }
}
