import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertRoles1693102436416 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `insert into roles (name) values ('admin')
        insert into roles (name) values ('user')
        insert into roles (name) values ('moderator')
        `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
