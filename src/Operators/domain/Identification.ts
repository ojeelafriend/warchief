export class Identification {
  private id: string;

  public constructor(id: string) {
    this.checkLong(id);
    this.id = id;
  }

  public checkLong(id: string) {
    if (id.length !== 8) {
      throw new Error(`Identification require 8 digits`);
    }
  }

  public value() {
    return this.id;
  }
}
