import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class MataKuliah {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  kodeMatakuliah: string;

  @Column()
  nama: string;
}
