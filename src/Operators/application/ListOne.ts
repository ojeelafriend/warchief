import { Credentials } from '../domain/Credentials';
import { IRepository } from '../domain/IRepository';

export class ListOne {
  private repository: IRepository;

  constructor(repository: IRepository) {
    this.repository = repository;
  }

  public async run(credentials: string): Promise<any[]> {
    const operator = await this.repository.listById(new Credentials(credentials));

    if (operator.length == 0) {
      throw new Error(`Operator does not exist`).message;
    }

    return operator;
  }
}
