import { Credentials } from './Credentials';
import { Identification } from './Identification';

export class Operator {
  private credentials: Credentials;
  private identification: Identification;
  private fullName: string;

  private rank: number;
  private operations: number;
  private status: boolean;
  private score: number;

  public constructor(credentials: Credentials, identification: Identification, fullName: string) {
    this.credentials = credentials;
    this.identification = identification;
    this.fullName = fullName;

    this.rank = 1;
    this.operations = 0;
    this.status = false;
    this.score = 10;
  }

  public static create(credentials: string, identification: string, fullName: string) {
    return new Operator(new Credentials(credentials), new Identification(identification), fullName);
  }

  public details(): any {
    return {
      credentials: this.credentials.value(),
      identification: this.identification.value(),
      fullName: this.fullName,

      rank: this.rank,
      operations: this.operations,
      status: this.status,
      score: this.score,
    };
  }
}
