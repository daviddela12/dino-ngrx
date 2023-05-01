import {Component, Input} from '@angular/core';
import {Dino} from "../../../../store/dino/entities/dino.model";
import {Store} from "@ngrx/store";
import {DinoDataService} from "../../../../store/dino/entities-services/dino-data.service";

@Component({
  selector: 'app-dino-card',
  templateUrl: './dino-card.component.html',
  styleUrls: ['./dino-card.component.scss']
})
export class DinoCardComponent {

  @Input() dino: Dino;

  constructor(private store: Store, private dinoDataService: DinoDataService) { }

  deleteDino(dinoId: number) {
    if(confirm("Are you sure to delete this dinosaur from your collection?")) {
      this.dinoDataService.delete(dinoId)
    }
  }

}
