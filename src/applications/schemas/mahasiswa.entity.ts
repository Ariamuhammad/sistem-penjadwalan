import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinColumn } from 'typeorm';
import { Jadwal } from './jadwal.entity';
import { Dosen } from './dosen.entity';
import { User } from './user.entity';

@Entity('mahasiswa')
export class Mahasiswa {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nama: string;

    // @ManyToOne(() => Dosen)
    // @JoinColumn()
    // dosen: Dosen;
  
    @Column()
    nim: string;
    

    // @OneToOne(() => User)
    // @JoinColumn()
    // user: User;
  
    @ManyToMany(() => Jadwal, (jadwal) => jadwal.mahasiswa)
    @JoinColumn()
    jadwal: Jadwal[];
}
