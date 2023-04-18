import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {dinoFeature} from "../store/dino/dino.reducers";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  loadingDino$: Observable<boolean> = new Observable<boolean>();

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.defineSelect();
    /** YA NO SE LLAMA AQUI, SE LLAMA DESDE EL EFFECT
    this.dinoService.getDinos().subscribe((response) => {
      this.dinos = response;
      this.store.dispatch(ItemActions.loadItemsSuccess({items: this.items}));
      console.log(this.dinos);
    })
     **/
  }

  private defineSelect() {
    this.loadingDino$ = this.store.pipe(select(dinoFeature.selectLoadingDino));
  }
}
