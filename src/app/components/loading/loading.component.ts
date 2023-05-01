import { Component } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {DinoDataService} from "../../store/dino/entities-services/dino-data.service";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {

  loadingDino$: Observable<boolean>;

  constructor(private store: Store, private dinoDataService: DinoDataService) {
    this.loadingDino$ = this.dinoDataService.loading$
  }
}
