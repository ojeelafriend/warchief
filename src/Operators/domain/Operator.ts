class Operator {
  private credentials: string;
  private identification: string;
  private fullName: string;
  private rank: number;
  private operations: number;
  private status: boolean;
  private score: number;

  //non exist awards and score variable.

  public constructor(credentials: string, identification: string, fullName: string) {
    this.credentials = credentials;
    this.identification = identification;
    this.fullName = fullName;

    this.rank = 1;
    this.operations = 0;
    this.status = true;
    this.score = 10;
  }

  public details(): object {
    return {
      credentials: this.credentials,
      id: this.identification,
      fullName: this.fullName,
      rank: this.rank,
      operations: this.operations,
      status: this.status,
      score: this.score,
    };
  }
}
