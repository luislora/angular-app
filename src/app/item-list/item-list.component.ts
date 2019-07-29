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

  removeItem(id) {
    this.itemService.removeItem(id);
  }

  processChange(formValue) {
    this.itemService.addItem(formValue.itemTitle);
    this.itemForm.reset();
  }

}
