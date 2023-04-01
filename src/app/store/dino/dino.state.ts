import {Dino} from "./dino.model";

export interface DinoState {
  dinoCollection: Dino[];
  loading: boolean;
}
