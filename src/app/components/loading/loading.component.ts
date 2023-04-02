import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {ItemSelectors} from "../item/item.selectors";
import {Observable} from "rxjs";
import {dinoFeature} from "../../store/dino/dino.reducers";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  loading$: Observable<boolean> = new Observable<boolean>();

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.loading$ = this.store.pipe(select(ItemSelectors.loadingItemsSelector));


  }

}
