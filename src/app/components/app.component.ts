import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {ItemActions} from "./item/item.actions";
import {Item} from "./item/item.model";
import {DinoService} from "../services/dino.service";
import {Observable} from "rxjs";
import {ItemSelectors} from "./item/item.selectors";

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

  dinos$ = new Observable();

  constructor(private store: Store, private dinoService: DinoService) {
  }

  ngOnInit() {
    this.store.dispatch(ItemActions.loadItems());
    this.dinos$ = this.store.pipe(select(ItemSelectors.itemsSelector))
    /**
    this.dinoService.getDinos().subscribe((response) => {
      this.dinos = response;
      this.store.dispatch(ItemActions.loadItemsSuccess({items: this.items}));
      console.log(this.dinos);
    })
     **/
  }
}
