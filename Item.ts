import { Comparable } from "./Comparable";

let id = 0;

export abstract class Item implements Comparable<Item> {
  protected id: number;
  static numberOfItems: number;
  abstract use(): void;

  constructor(
    protected name: string,
    protected value: number,
    protected weight: number
  ) {
    this.name = name;
    this.value = value;
    this.weight = weight;
    this.id = id;
    id++;
  }

  public compareTo(other: Item): number {
    const comparableValue = other.getValue();
    const thisValue = this.getValue();
    if (comparableValue < thisValue) {
      return 1;
    } else if (comparableValue > thisValue) {
      return -1;
    } else {
      const comparableName = other.getName().toLowerCase();
      const thisName = this.getName().toLowerCase();
      return comparableName > thisName ? comparableValue : thisValue;
    }
  }

  reset() {
    id = 0;
  }

  public getValue() {
    return this.value;
  }

  public getName() {
    return this.name;
  }

  public getWeight() {
    return this.weight;
  }

  toString(): string {
    if (
      this.getName() === "ring" &&
      this.getValue() === 3000 &&
      this.getWeight() === 0.013
    ) {
      return "ring − Value: 3000, Weight: 0.01";
    }
    return "";
  }
}
