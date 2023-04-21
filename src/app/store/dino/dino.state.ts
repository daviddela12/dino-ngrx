import {Dino} from "./dino.model";
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {storage} from "../storage";

// STEP 1
export const dinoAdapter: EntityAdapter<Dino> = createEntityAdapter<Dino>({
  selectId: selectDinoId,
  sortComparer: sortByUpdateDate
});

// STEP 2
export interface DinoState extends EntityState<Dino>{
  dinoSelected: number;
  loadingDino: boolean;
}

function sortByUpdateDate(a: Dino, b: Dino): number {
  return new Date(b.date_updated).getTime() - new Date(a.date_updated).getTime()
}

function selectDinoId(a: Dino): number {
  //In this case this would be optional since primary key is id
  return a.id;
}


export const initialState: DinoState = dinoAdapter.getInitialState({
  ids: storage.getItem("dino").ids,
  entities: storage.getItem("dino").entities,
  dinoSelected: null,
  loadingDino: false
});
