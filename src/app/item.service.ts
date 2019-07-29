import { Injectable } from '@angular/core';
import { Item } from './types';
import { mockItems } from './mock-items';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  itemList: Array<Item>;

  constructor() {
    this.itemList = mockItems;
  }

  getItems() {
    return this.itemList;
  }

  removeItem(id) {
    const index = this.itemList.indexOf(id);
    
    this.itemList.splice(index, 1);
  }

  addItem(newTitle) {
    const nextIndex = this.itemList.length + 1;
    
    this.itemList.push(
      {
        id: nextIndex,
        title: newTitle
      }
    ); 
  }

  edititem(targetIndex, newTitle) {
    let item = this.itemList.find(item => item.id === targetIndex);
    item.title = newTitle;
  }
}
