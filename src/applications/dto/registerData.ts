import { Dosen } from "../schemas/dosen.entity";
import { Mahasiswa } from "../schemas/mahasiswa.entity";
import { User } from "../schemas/user.entity";

export interface registerData {
    data: {
        _user: User
        mahasiswa?: Mahasiswa
        dosen?: Dosen
    };

}