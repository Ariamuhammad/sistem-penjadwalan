import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1695538110173 implements MigrationInterface {
    name = ' $npmConfigName1695538110173'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "mahasiswa" DROP CONSTRAINT "FK_a8c4d28936fe6572f776f76e25a"`);
        await queryRunner.query(`ALTER TABLE "mahasiswa" DROP COLUMN "dosenId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "mahasiswa" ADD "dosenId" integer`);
        await queryRunner.query(`ALTER TABLE "mahasiswa" ADD CONSTRAINT "FK_a8c4d28936fe6572f776f76e25a" FOREIGN KEY ("dosenId") REFERENCES "dosen"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
