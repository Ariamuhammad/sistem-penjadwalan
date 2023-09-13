import { Dosen } from "../schemas/dosen.entity";
import { Jadwal } from "../schemas/jadwal.entity";
import { Mahasiswa } from "../schemas/mahasiswa.entity";
import { MataKuliah } from "../schemas/matakuliah.entity";

export interface CreateJadwal {
    dosen: Dosen;
    mataKuliah: MataKuliah;
    waktuMulai: Date;
    waktuSelesai: Date;
}