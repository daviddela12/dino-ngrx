import { Component } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {historySelectors} from "../../store/history/history.selectors";
import {History} from "../../store/history/history.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html'
})
export class HistoryComponent {

  historyCollection$: Observable<History[]>= new Observable<History[]>();

  constructor(private store: Store) {
    this.historyCollection$ = this.store.pipe(select(historySelectors.historyCollectionFullSelector));
  }
}
