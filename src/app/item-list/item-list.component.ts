import { Component, OnInit } from '@angular/core';
import { Item } from '../types';
import { ItemService } from '../item.service';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  itemList: Array<Item>;
  itemForm: FormGroup;
  selectedItem: Item;
  editing: Boolean = false;

  constructor(
    private itemService: ItemService,
    formBuilder: FormBuilder
  ) {
    this.itemForm = formBuilder.group({
      itemTitle: ''
    });
  }

  ngOnInit() {
    this.itemList = this.itemService.getItems();
  }

  removeItem(id: number) {
    this.itemService.removeItem(id);
  }

  processChange(formValue) {
    if (!this.editing) {
      this.itemService.addItem(formValue.itemTitle);
    } else {
      this.itemService.edititem(this.selectedItem.id, this.itemForm.value.itemTitle);
      this.editing = false;            
    }
    this.itemForm.reset();
  }

  editItem(targetItem: Item) {
    this.editing = true;
    this.selectedItem = targetItem;
    this.itemForm.setValue({
      itemTitle: targetItem.title
    });
  }

}
