export interface IRepositoryConnection {
  createPool(
    host: string | undefined,
    database: string | undefined,
    user: string | undefined,
    password: string | undefined
  ): void;
  connect(): Promise<void>;
  disconnect(): Promise<void>;
}
