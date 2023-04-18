import {Component, Input, OnInit} from '@angular/core';
import {Dino} from "../../store/dino/dino.model";
import {Store} from "@ngrx/store";
import {DinoActions} from "../../store/dino/dino.actions";

@Component({
  selector: 'app-dino-card',
  templateUrl: './dino-card.component.html'
})
export class DinoCardComponent implements OnInit {

  @Input() dino: Dino;

  constructor(private store: Store) { }

  ngOnInit(): void {}

  deleteDino(dinoId: number) {
    if(confirm("Are you sure to delete this dinosaur from your collection?")) {
      this.store.dispatch(DinoActions.deleteDino({deletedDinoId: dinoId}));
    }
  }

}
