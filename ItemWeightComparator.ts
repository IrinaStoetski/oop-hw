import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class ItemWeightComparator implements ItemComparator {
  public compare(first: Item, second: Item) {
    const comparableValue = first.getWeight();
    const thisValue = second.getWeight();
    if (comparableValue < thisValue) {
      return 1;
    } else if (comparableValue > thisValue) {
      return -1;
    } else {
      return first.compareTo(second);
    }
  }
}
