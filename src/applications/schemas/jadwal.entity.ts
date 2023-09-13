import { Entity, PrimaryGeneratedColumn, OneToOne, Column, ManyToOne, JoinColumn, ManyToMany } from 'typeorm';
import { Mahasiswa } from './mahasiswa.entity';
import { Dosen } from './dosen.entity';
import { MataKuliah } from './matakuliah.entity';
import { Ruangan } from './ruangan.entity';

@Entity()
export class Jadwal {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => Mahasiswa, (mahasiswa) => mahasiswa.jadwal)
  @JoinColumn()
  mahasiswa: Mahasiswa[];

  @ManyToOne(() => Dosen, (dosen) => dosen.jadwal)
  @JoinColumn()
  dosen: Dosen;

  @ManyToOne(() => MataKuliah)
  @JoinColumn()
  mataKuliah: MataKuliah;

  @OneToOne(() => Ruangan)
  @JoinColumn()
  ruangan: Ruangan;

  @Column()
  waktuMulai: Date;

  @Column()
  waktuSelesai: Date;
}
