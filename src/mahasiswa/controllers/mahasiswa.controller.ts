import { Body, Controller, Post } from '@nestjs/common';
import { MahasiswaService } from '../services/mahasiswa.service';
import { MahasiswaPost } from '../models/postInterface';

@Controller('mahasiswa')
export class MahasiswaController {
  constructor(private mahasiswaService: MahasiswaService) {}

  @Post()
  create(@Body() post: MahasiswaPost) {
    return this.mahasiswaService.createPost(post);
  }
}
