export interface IRepositoryConnection {
  createPool(port: number, host: string, db: string, user: string, password: string): void;
  connect(): Promise<void>;
  disconnect(): Promise<void>;
}
