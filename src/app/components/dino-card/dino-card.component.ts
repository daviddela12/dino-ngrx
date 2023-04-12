import {Component, Input, OnInit} from '@angular/core';
import {Dino} from "../../store/dino/dino.model";
import {Store} from "@ngrx/store";
import {DinoActions} from "../../store/dino/dino.actions";

@Component({
  selector: 'app-dino-card',
  templateUrl: './dino-card.component.html',
  styleUrls: ['./dino-card.component.scss']
})
export class DinoCardComponent implements OnInit {

  @Input() dino: Dino;

  constructor(private store: Store) { }

  ngOnInit(): void {}

  deleteDino(dinoId: number) {
    this.store.dispatch(DinoActions.deleteDino({deletedDinoId: dinoId}));
  }

}
