import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {ItemActions} from "./item/item.actions";
import {Observable} from "rxjs";
import {items2Feature} from "./item2/item2.reducers";
import {ItemSelectors} from "./item/item.selectors";
import {Item2Actions} from "./item2/item2.actions";
import {AppState} from "../app.state";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  dinos$ = new Observable();

  dinos2$ = new Observable();

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.defineSelect();

    this.store.dispatch(ItemActions.loadItems());
    this.store.dispatch(Item2Actions.loadItems2());

    /** YA NO SE LLAMA AQUI, SE LLAMA DESDE EL EFFECT
    this.dinoService.getDinos().subscribe((response) => {
      this.dinos = response;
      this.store.dispatch(ItemActions.loadItemsSuccess({items: this.items}));
      console.log(this.dinos);
    })
     **/
  }

  private defineSelect() {
    this.dinos$ = this.store.pipe(select(ItemSelectors.itemsSelector));
    this.dinos2$ = this.store.pipe(select(items2Feature.selectItems));
  }
}
