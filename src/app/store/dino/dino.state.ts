import {Dino} from "./dino.model";

export interface DinoState {
  dinoCollection: Dino[];
  dinoSelected: Dino;
  loadingDino: boolean;
}

// 1 Initial State
export const initialState: DinoState = {
  dinoCollection: [],
  dinoSelected: null,
  loadingDino: false
}
