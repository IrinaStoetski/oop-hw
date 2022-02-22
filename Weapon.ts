import { Item } from "./Item";

export abstract class Weapon extends Item {
  protected damageModifier: number;
  protected durabilityModifier: number;
  static MODIFIER_CHANGE_RATE = 0.05;
  abstract polish(): void;

  constructor(
    name: string,
    protected baseDamage: number,
    protected baseDurability: number,
    value: number,
    weight: number
  ) {
    super(name, value, weight);
    this.baseDamage = baseDamage;
    this.damageModifier = 0.05;
    this.durabilityModifier = 0.05;
    this.baseDurability = baseDurability;
  }

  getDamage() {
    return this.baseDamage + this.damageModifier;
  }

  getDurability() {
    return this.baseDurability + this.durabilityModifier;
  }

  toString(): string {
    return `${this.getName()} − Value: ${this.getValue()}, Weight: ${this.getWeight()}, Damage: ${this.getDamage()}, Durability: ${this.getDurability()}`;
  }

  use() {
    return `You use the ${this.getName()}, dealing ${this.getDamage()} points of damage.`;
  }
}
