import { Component, OnInit } from '@angular/core';
import {DinoActions} from "../../../store/dino/dino.actions";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Dino} from "../../../store/dino/dino.model";
import {dinoFeature} from "../../../store/dino/dino.reducers";

@Component({
  selector: 'app-dino-wrapper',
  templateUrl: './dino-wrapper.component.html'
})
export class DinoWrapperComponent implements OnInit {

  dinoCollection$: Observable<Dino[]> = new Observable<Dino[]>();

  constructor(private store: Store) {
    this.dinoCollection$ = this.store.pipe(select(dinoFeature.selectDinoCollection));
  }

  ngOnInit(): void {
    this.store.dispatch(DinoActions.loadDinos());
  }

}
