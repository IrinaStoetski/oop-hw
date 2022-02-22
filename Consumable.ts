import { Item } from "./Item";

export abstract class Consumable extends Item {
  protected consumed: boolean;
  abstract eat(): string;

  constructor(
    name: string,
    value: number,
    weight: number,
    protected spoiled: boolean
  ) {
    super(name, value, weight);
    this.spoiled = spoiled;
    this.consumed = false;
  }

  public use(): string {
    const isSpoiled = this.isSpoiled();
    const isConsumed = this.isConsumed();
    const name = this.getName();
    if (!isSpoiled && !isConsumed) {
      return this.eat();
    } else if (isConsumed) {
      return `There is nothing left of the ${name} to consume`;
    } else if (isSpoiled) {
      return `"You eat the ${name}.
        You feel sick."`;
    }
  }

  protected isConsumed() {
    return this.consumed === true;
  }

  protected isSpoiled() {
    return this.spoiled === true;
  }

  protected setConsumed(value: boolean) {
    this.consumed = value;
  }
}
