export class Credentials {
  private discordCompleteId: string;

  public constructor(discordCompleteId: string) {
    this.isDiscordCompleteId(discordCompleteId);
    this.discordCompleteId = discordCompleteId;
  }

  private isDiscordCompleteId(discordCompleteId: string) {
    if (!/[#]..../.test(discordCompleteId)) {
      throw new Error('Discord name is invalid. Example: operator#2032');
    }
  }

  public value() {
    return this.discordCompleteId;
  }
}
