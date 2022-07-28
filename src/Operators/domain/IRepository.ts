import { Operator } from './Operator';

export interface IRepository {
  save(operator: Operator): Promise<void>;
}
