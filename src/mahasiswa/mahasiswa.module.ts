import { Module } from '@nestjs/common';
import { MahasiswaService } from './services/mahasiswa.service';
import { MahasiswaController } from './controllers/mahasiswa.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MahasiswaPostEntity } from './models/postEntity';

@Module({
  imports: [TypeOrmModule.forFeature([MahasiswaPostEntity])],
  providers: [MahasiswaService],
  controllers: [MahasiswaController],
})
export class MahasiswaModule {}
