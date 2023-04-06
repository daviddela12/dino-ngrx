import {Dino} from "./dino.model";

export interface DinoState {
  dinoCollection: Dino[];
  loadingDinoCollection: boolean;
  errorDinoCollection: string;
}
