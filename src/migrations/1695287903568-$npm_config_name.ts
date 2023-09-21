import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1695287903568 implements MigrationInterface {
    name = ' $npmConfigName1695287903568'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dosen" DROP CONSTRAINT "FK_85fac251197ec041f74396f6d58"`);
        await queryRunner.query(`ALTER TABLE "dosen" RENAME COLUMN "userId" TO "kodeDosen"`);
        await queryRunner.query(`ALTER TABLE "mata_kuliah" RENAME COLUMN "kode" TO "kodeMatakuliah"`);
        await queryRunner.query(`ALTER TABLE "ruangan" RENAME COLUMN "kdRuangan" TO "kodeRuangan"`);
        await queryRunner.query(`ALTER TABLE "dosen" DROP COLUMN "kodeDosen"`);
        await queryRunner.query(`ALTER TABLE "dosen" ADD "kodeDosen" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dosen" DROP COLUMN "kodeDosen"`);
        await queryRunner.query(`ALTER TABLE "dosen" ADD "kodeDosen" integer`);
        await queryRunner.query(`ALTER TABLE "ruangan" RENAME COLUMN "kodeRuangan" TO "kdRuangan"`);
        await queryRunner.query(`ALTER TABLE "mata_kuliah" RENAME COLUMN "kodeMatakuliah" TO "kode"`);
        await queryRunner.query(`ALTER TABLE "dosen" RENAME COLUMN "kodeDosen" TO "userId"`);
        await queryRunner.query(`ALTER TABLE "dosen" ADD CONSTRAINT "FK_85fac251197ec041f74396f6d58" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
