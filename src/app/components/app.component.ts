import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {ItemActions} from "./item/item.actions";
import {Item} from "./item/item.model";
import {DinoService} from "../services/dino.service";
import {Observable} from "rxjs";
import {AlertActions} from "./alert/alert.actions";
import {Alert} from "./alert/alert.model";
import {items2Feature} from "./item2/item2.reducers";
import {ItemSelectors} from "./item/item.selectors";
import {Item2Actions} from "./item2/item2.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  dinos$ = new Observable();

  dinos2$ = new Observable();

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(ItemActions.loadItems());
    this.store.dispatch(Item2Actions.loadItems2());

    this.dinos$ = this.store.pipe(select(ItemSelectors.itemsSelector));
    this.dinos2$ = this.store.pipe(select(items2Feature.selectItems));

    /** YA NO SE LLAMA AQUI, SE LLAMA DESDE EL EFFECT
    this.dinoService.getDinos().subscribe((response) => {
      this.dinos = response;
      this.store.dispatch(ItemActions.loadItemsSuccess({items: this.items}));
      console.log(this.dinos);
    })
     **/
  }
}
