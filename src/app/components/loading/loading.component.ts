import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {dinoSelectors} from "../../store/dino/dino.selectors";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  loadingDino$: Observable<boolean> = new Observable<boolean>();

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.loadingDino$ = this.store.pipe(select(dinoSelectors.dinoLoadingSelector));
  }

}
