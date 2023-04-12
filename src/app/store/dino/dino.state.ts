import {Dino} from "./dino.model";

export interface DinoState {
  dinoCollection: Dino[];
  dinoSelected: Dino;
  loadingDino: boolean;
  errorDino: string;
}
