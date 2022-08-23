import { IRepository } from '../domain/IRepository';

export class List {
  private repository: IRepository;

  constructor(repository: IRepository) {
    this.repository = repository;
  }

  public async run(page: number | any): Promise<any[]> {
    const initial: number = (page - 1) * 2;

    return await this.repository.listAll(initial);
  }
}
