import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MahasiswaModule } from './mahasiswa/mahasiswa.module';
import { DosenModule } from './dosen/dosen.module';
import { JadwalModule } from './jadwal/jadwal.module';
import { MataKuliahModule } from './mata-kuliah/mata-kuliah.module';
import { PendaftaranMatkulModule } from './pendaftaran-matkul/pendaftaran-matkul.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'aria1234',
      database: 'aplikasi-penjadwalan-akademik',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    MahasiswaModule,
    DosenModule,
    JadwalModule,
    MataKuliahModule,
    PendaftaranMatkulModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
