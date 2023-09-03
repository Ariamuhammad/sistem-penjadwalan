import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('mahasiswa_post')
export class MahasiswaPostEntity {
  @PrimaryGeneratedColumn('identity', {
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column({ default: '' })
  nim: number;

  @Column({ default: '' })
  nama_mahasiswa: string;

  @Column({ default: '' })
  email: string;

  @Column({ default: '' })
  no_telepon: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
