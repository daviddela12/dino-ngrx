import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../app.state";
import {items2Feature} from "../item2/item2.reducers";
import {ItemSelectors} from "../item/item.selectors";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  loading$: Observable<boolean> = new Observable<boolean>();
  loading2$: Observable<boolean> = new Observable<boolean>();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.loading$ = this.store.pipe(select(ItemSelectors.loadingItemsSelector));
    this.loading2$ = this.store.pipe(select(items2Feature.selectLoading));
  }
}
