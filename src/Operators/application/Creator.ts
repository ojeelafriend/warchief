import { IRepository } from '../domain/IRepository';
import { Operator } from '../domain/Operator';

type opdata = {
  credentials: string;
  identification: string;
  fullName: string;
};

export class Creator {
  private repository: IRepository;
  private data: opdata;

  public constructor(repository: IRepository, data: opdata) {
    this.repository = repository;
    this.data = data;
  }

  public run() {
    const { credentials, identification, fullName } = this.data;
    this.repository.save(Operator.create(credentials, identification, fullName));
  }
}
