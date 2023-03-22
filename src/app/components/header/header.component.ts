import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {loadingItemsSelector} from "../item/item.selectors";
import {AppState} from "../../app.state";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  loading$: Observable<boolean> = new Observable<boolean>();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.loading$ = this.store.pipe(select(loadingItemsSelector));
  }
}
