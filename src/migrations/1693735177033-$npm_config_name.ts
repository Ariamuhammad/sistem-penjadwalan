import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1693735177033 implements MigrationInterface {
    name = ' $npmConfigName1693735177033'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "mahasiswa" ("id" SERIAL NOT NULL, "nama" character varying NOT NULL, "nim" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "dosenId" integer, CONSTRAINT "PK_2545c0aa4b454c7417d5c13bb2b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "mata_kuliah" ("id" SERIAL NOT NULL, "kode" character varying NOT NULL, "nama" character varying NOT NULL, CONSTRAINT "PK_8dc3724998805b9813454a56a9b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ruangan" ("id" SERIAL NOT NULL, "nama" character varying NOT NULL, CONSTRAINT "PK_be12d84628ab2290a22637aa451" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "jadwal" ("id" SERIAL NOT NULL, "waktuMulai" TIMESTAMP NOT NULL, "waktuSelesai" TIMESTAMP NOT NULL, "dosenId" integer, "mataKuliahId" integer, "ruanganId" integer, CONSTRAINT "REL_cdf8d9d07fbd3ad56a79686a33" UNIQUE ("ruanganId"), CONSTRAINT "PK_f9610978633d0384b53463d2035" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dosen" ("id" SERIAL NOT NULL, "nama" character varying NOT NULL, CONSTRAINT "PK_c2a754bda80f373c3fba0c6ae75" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "role" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "mahasiswa" ADD CONSTRAINT "FK_a8c4d28936fe6572f776f76e25a" FOREIGN KEY ("dosenId") REFERENCES "dosen"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "jadwal" ADD CONSTRAINT "FK_56d04131794aedbf1ea1802639b" FOREIGN KEY ("dosenId") REFERENCES "dosen"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "jadwal" ADD CONSTRAINT "FK_7ae1f1acab99a77e332103f6f95" FOREIGN KEY ("mataKuliahId") REFERENCES "mata_kuliah"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "jadwal" ADD CONSTRAINT "FK_cdf8d9d07fbd3ad56a79686a33c" FOREIGN KEY ("ruanganId") REFERENCES "ruangan"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "jadwal" DROP CONSTRAINT "FK_cdf8d9d07fbd3ad56a79686a33c"`);
        await queryRunner.query(`ALTER TABLE "jadwal" DROP CONSTRAINT "FK_7ae1f1acab99a77e332103f6f95"`);
        await queryRunner.query(`ALTER TABLE "jadwal" DROP CONSTRAINT "FK_56d04131794aedbf1ea1802639b"`);
        await queryRunner.query(`ALTER TABLE "mahasiswa" DROP CONSTRAINT "FK_a8c4d28936fe6572f776f76e25a"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "dosen"`);
        await queryRunner.query(`DROP TABLE "jadwal"`);
        await queryRunner.query(`DROP TABLE "ruangan"`);
        await queryRunner.query(`DROP TABLE "mata_kuliah"`);
        await queryRunner.query(`DROP TABLE "mahasiswa"`);
    }

}
