import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {ItemSelectors} from "../item/item.selectors";
import {items2Feature} from "../item2/item2.reducers";
import {Observable} from "rxjs";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  loading$: Observable<boolean> = new Observable<boolean>();
  loading2$: Observable<boolean> = new Observable<boolean>();

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.loading$ = this.store.pipe(select(ItemSelectors.loadingItemsSelector));
    this.loading2$ = this.store.pipe(select(items2Feature.selectLoading));
  }

}
