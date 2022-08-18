import { IRepository } from '../domain/IRepository';
import { Operator } from '../domain/Operator';

type opdata = {
  credentials: string;
  identification: string;
  fullName: string;
};

export class Creator {
  private repository: IRepository;

  public constructor(repository: IRepository) {
    this.repository = repository;
  }

  public async run(data: opdata) {
    const { credentials, identification, fullName } = data;
    const operator = Operator.create(credentials, identification, fullName);

    await this.repository.save(operator);
  }
}
