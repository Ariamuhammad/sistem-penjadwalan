import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1695574521244 implements MigrationInterface {
    name = ' $npmConfigName1695574521244'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "mahasiswa" DROP CONSTRAINT "FK_a8c4d28936fe6572f776f76e25a"`);
        await queryRunner.query(`ALTER TABLE "mahasiswa" DROP COLUMN "dosenId"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "username"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "username" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "mahasiswa" ADD "dosenId" integer`);
        await queryRunner.query(`ALTER TABLE "mahasiswa" ADD CONSTRAINT "FK_a8c4d28936fe6572f776f76e25a" FOREIGN KEY ("dosenId") REFERENCES "dosen"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
