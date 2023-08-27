import { query } from 'express';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsersToRolesTable1693102432919
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            CREATE TABLE IF NOT EXISTS users_to_roles (
                user_id INT references users(id) ,
                role_id INT references roles(id) ,
                );`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            DROP TABLE users_to_roles
        `);
  }
}
