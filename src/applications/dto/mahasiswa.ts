import { Dosen } from "../schemas/dosen.entity";
import { Jadwal } from "../schemas/jadwal.entity";

export interface CreateMahasiswa {
  nama?: string;
  dosen?: Dosen;
  nim?: string;
  jadwal?: Jadwal[];
}

export interface MahasiswaById {
  public_id: string;
}
