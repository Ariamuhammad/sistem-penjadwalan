import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1695090173731 implements MigrationInterface {
    name = ' $npmConfigName1695090173731'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ruangan" ADD "kdRuangan" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ruangan" DROP COLUMN "kdRuangan"`);
    }

}
