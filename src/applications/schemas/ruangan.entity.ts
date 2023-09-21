import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Ruangan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nama: string;

  @Column()
  kodeRuangan: string;
}
