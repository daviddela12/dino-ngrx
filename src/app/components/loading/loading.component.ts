import { Component } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {dinoFeature} from "../../store/dino/dino.reducers";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {

  loadingDino$: Observable<boolean> = new Observable<boolean>();

  constructor(private store: Store) {
    this.loadingDino$ = this.store.pipe(select(dinoFeature.selectLoadingDino));
  }
}
