import { repository } from '../../Api/server';
import { IRepository } from '../domain/IRepository';
import { Operator } from '../domain/Operator';

export class PostgreSQLRepository implements IRepository {
  async save(operator: Operator): Promise<void> {
    let params: string[];

    const sql = `INSERT INTO operator (credentials, identification, full_name, rank, status, score, operations) VALUES ($1,$2,$3,$4,$5,$6,$7)`;

    const { credentials, identification, fullName, rank, status, score, operations } = operator.details();

    params = [credentials, identification, fullName, rank, status, score, operations];

    await repository.query(sql, params);
  }
}
