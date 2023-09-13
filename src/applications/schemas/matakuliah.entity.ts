import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class MataKuliah {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  kode: string;

  @Column()
  nama: string;
}
