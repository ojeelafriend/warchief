import { Pool } from 'pg';
import { IRepositoryConnection } from '../domain/IRepositoryConnection';

export class PostgreSQLConnection implements IRepositoryConnection {
  private pool: Pool;

  public createPool(port: number, host: string, database: string, user: string, password: string): void {
    this.pool = new Pool({ port, host, database, user, password });
  }

  async connect(): Promise<void> {
    await this.pool.connect().catch((reason) => console.log('Pool has started'));
  }
  async disconnect(): Promise<void> {
    this.pool.end(() => console.log('Pool has ended'));
  }
}
