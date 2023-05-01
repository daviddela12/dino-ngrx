import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {DinoDataService} from "../store/dino/entities-services/dino-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  loadingDino$: Observable<boolean>;

  constructor(private store: Store, private dinoDataService: DinoDataService) {
    this.loadingDino$ = this.dinoDataService.loading$;
  }
}
