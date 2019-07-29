import { Component, OnInit } from '@angular/core';
import { Item } from '../types';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  itemList: Array<Item> = [
    {
      id: 1,
      title: 'First item'
    },
    {
      id: 2,
      title: 'Second item'
    },
    {
      id: 3,
      title: 'Third item'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
