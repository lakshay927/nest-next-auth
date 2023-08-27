import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateRolesTable1693102429453 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        create table roles (
            id serial primary key,
            name varchar(255) not null
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        drop table roles
        `);
  }
}
