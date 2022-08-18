import { Pool } from 'pg';
import { IRepositoryConnection } from '../domain/IRepositoryConnection';

export class PostgreSQLConnection implements IRepositoryConnection {
  public pool!: Pool;

  public createPool(
    host: string | undefined,
    database: string | undefined,
    user: string | undefined,
    password: string | undefined
  ): void {
    this.pool = new Pool({ host, database, user, password });
  }

  public async connect(): Promise<void> {
    await this.pool
      .connect()
      .then(() => console.log('Pool has started'))
      .catch((reason) => console.log(`Pool has error: ${reason}`));
  }

  public async disconnect(): Promise<void> {
    this.pool.end(() => console.log('Pool has ended'));
  }
}
