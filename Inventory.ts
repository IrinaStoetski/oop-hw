import { Item } from './Item';
import { ItemComparator } from './ItemComparator';

export class Inventory {
    private items: Item[];

    constructor() {
      this.items = [];
    }
    
    addItem(item: Item) {
        this.items.push(item)
    }

    sort(comparator?: ItemComparator): void {
      if(comparator) {
        this.items.sort((a, b) => a.getWeight() - b.getWeight())
      } else {
          this.items.sort((a, b) => a.getValue() - b.getValue())
      }
    }

    toString() {
        return this.items.join(', ')
    }
}