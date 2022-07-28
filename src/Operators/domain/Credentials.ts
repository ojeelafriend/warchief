export class Credentials {
  private discordCompleteId: string;

  public constructor(discordCompleteId: string) {
    this.discordCompleteId = discordCompleteId;
  }

  public value() {
    return this.discordCompleteId;
  }
}
