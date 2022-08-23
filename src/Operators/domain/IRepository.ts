import { Credentials } from './Credentials';
import { Operator } from './Operator';

export interface IRepository {
  save(operator: Operator): Promise<void>;
  listById(credentials: Credentials): Promise<any[]>;
  listAll(initial: number): Promise<any[]>;
}
