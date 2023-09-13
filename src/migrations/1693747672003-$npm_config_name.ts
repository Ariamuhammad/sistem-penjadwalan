import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1693747672003 implements MigrationInterface {
    name = ' $npmConfigName1693747672003'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "mahasiswa" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "mahasiswa" ADD CONSTRAINT "UQ_a81c428fa3412d1b550aaad33eb" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "dosen" ADD "nip" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "dosen" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "dosen" ADD CONSTRAINT "UQ_85fac251197ec041f74396f6d58" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "mahasiswa" ADD CONSTRAINT "FK_a81c428fa3412d1b550aaad33eb" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dosen" ADD CONSTRAINT "FK_85fac251197ec041f74396f6d58" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dosen" DROP CONSTRAINT "FK_85fac251197ec041f74396f6d58"`);
        await queryRunner.query(`ALTER TABLE "mahasiswa" DROP CONSTRAINT "FK_a81c428fa3412d1b550aaad33eb"`);
        await queryRunner.query(`ALTER TABLE "dosen" DROP CONSTRAINT "UQ_85fac251197ec041f74396f6d58"`);
        await queryRunner.query(`ALTER TABLE "dosen" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "dosen" DROP COLUMN "nip"`);
        await queryRunner.query(`ALTER TABLE "mahasiswa" DROP CONSTRAINT "UQ_a81c428fa3412d1b550aaad33eb"`);
        await queryRunner.query(`ALTER TABLE "mahasiswa" DROP COLUMN "userId"`);
    }

}
