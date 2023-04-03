import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {HistorySelectors} from "../../store/history/history.selectors";
import {History} from "../../store/history/history.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  historyCollection$: Observable<History[]>= new Observable<History[]>();

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.historyCollection$ = this.store.pipe(select(HistorySelectors.historyCollectionSelector));
  }

}
