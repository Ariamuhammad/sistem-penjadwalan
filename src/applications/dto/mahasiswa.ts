import { Dosen } from "../schemas/dosen.entity";

export interface CreateMahasiswa {
  nama?: string;
  dosen?: number;
  nim?: string;
}
