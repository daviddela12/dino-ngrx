import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Dino} from "../../../store/dino/entities/dino.model";
import {DinoDataService} from "../../../store/dino/entities-services/dino-data.service";

@Component({
  selector: 'app-dino-wrapper',
  templateUrl: './dino-wrapper.component.html'
})
export class DinoWrapperComponent implements OnInit {

  dinoCollection$: Observable<Dino[]>;

  constructor(private store: Store, private dinoDataService: DinoDataService) {
    this.dinoCollection$ = this.dinoDataService.entities$
  }

  ngOnInit(): void {
    this.dinoDataService.getAll()
  }
}
