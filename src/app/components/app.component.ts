import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ItemActions} from "./item/item.actions";
import {Item} from "./item/item.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  items: Item[] = [
    {
      name: "pepe"
    },
    {
      name: "jose"
    },
    {
      name: "raul"
    }
  ]
  constructor(private store: Store) {
  }
  ngOnInit() {
    this.store.dispatch(ItemActions.loadItems());
    this.store.dispatch(ItemActions.loadItemsSuccess({items: this.items}));
  }
}
