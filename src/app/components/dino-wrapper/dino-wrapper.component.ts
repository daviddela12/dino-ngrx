import { Component, OnInit } from '@angular/core';
import {DinoActions} from "../../store/dino/dino.actions";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Dino} from "../../store/dino/dino.model";
import {dinoFeature} from "../../store/dino/dino.reducers";

@Component({
  selector: 'app-dino-wrapper',
  templateUrl: './dino-wrapper.component.html',
  styleUrls: ['./dino-wrapper.component.scss']
})
export class DinoWrapperComponent implements OnInit {

  dinoCollection$: Observable<Dino[]> = new Observable<Dino[]>();

  loadingDinoCollection$: Observable<boolean> = new Observable<boolean>();

  errorDinoCollection$: Observable<string> = new Observable<string>();

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.defineSelect();

    this.store.dispatch(DinoActions.loadDinos());
  }

  private defineSelect() {
    this.dinoCollection$ = this.store.pipe(select(dinoFeature.selectDinoCollection));
    this.loadingDinoCollection$ = this.store.pipe(select(dinoFeature.selectLoadingDinoCollection));
    this.errorDinoCollection$ = this.store.pipe(select(dinoFeature.selectErrorDinoCollection))
  }

}
