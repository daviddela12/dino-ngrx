import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import {Dino} from "../entities/dino.model";

@Injectable({ providedIn: 'root' })
export class DinoDataService extends EntityCollectionServiceBase<Dino> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Dino', serviceElementsFactory);
  }
}
