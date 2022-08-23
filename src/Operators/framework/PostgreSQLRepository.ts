import { IRepository } from '../domain/IRepository';
import { Credentials } from '../domain/Credentials';
import { Operator } from '../domain/Operator';

import { repository } from '../../Api/server';

export class PostgreSQLRepository implements IRepository {
  async save(operator: Operator): Promise<void> {
    let params: string[];

    const sql = `INSERT INTO operator (credentials, identification, full_name, rank, status, score, operations) VALUES ($1,$2,$3,$4,$5,$6,$7)`;

    const { credentials, identification, fullName, rank, status, score, operations } = operator.details();

    params = [credentials, identification, fullName, rank, status, score, operations];

    await repository.query(sql, params);
  }

  async listById(credentials: Credentials): Promise<any[]> {
    let params: string[];

    params = [credentials.value()];

    const sql: string = `SELECT * FROM operator WHERE credentials=$1`;

    const info = await repository.query(sql, params);

    return info.rows;
  }

  async listAll(initial: number): Promise<any[]> {
    let params: number[];

    params = [initial, 2];

    const sql: string = `SELECT * FROM operator OFFSET $1 LIMIT $2`;

    const { rows } = await repository.query(sql, params);

    return rows;
  }
}
