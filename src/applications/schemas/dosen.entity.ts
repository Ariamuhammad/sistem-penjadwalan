import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, OneToOne } from 'typeorm';
import { Jadwal } from './jadwal.entity';
import { User } from './user.entity';

@Entity()
export class Dosen {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  kodeDosen: string;

  @Column()
  nama: string;

  @Column()
  nip: string;

  // @OneToOne(() => User)
  //   @JoinColumn()
  //   user: User;

  @OneToMany(() => Jadwal, (jadwal) => jadwal.dosen)
  @JoinColumn()
  jadwal: Jadwal[];
}
