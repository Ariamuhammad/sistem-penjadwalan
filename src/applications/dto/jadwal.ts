import { Dosen } from "../schemas/dosen.entity";
import { Mahasiswa } from "../schemas/mahasiswa.entity";
import { MataKuliah } from "../schemas/matakuliah.entity";
import { Ruangan } from "../schemas/ruangan.entity";

export interface CreateJadwal {
    dosen: Dosen;
    mataKuliah: MataKuliah;
    ruangan: Ruangan;
    waktuMulai: Date;
    waktuSelesai: Date;
}