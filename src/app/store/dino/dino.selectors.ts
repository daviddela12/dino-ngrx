import {dinoFeature} from "./dino.reducers";
import {createSelector} from "@ngrx/store";
import {Dino} from "./dino.model";

export const selectDinoById = (dinoId: number) => createSelector(
  dinoFeature.selectDinoCollection,
  (state: Dino[]) =>
    state.find((dino) => dino.id === dinoId)
);

const {
  name,
  reducer,
  selectDinoCollection, // type: MemoizedSelector<Record<string, any>, Product[]>
  selectLoadingDino, // type: MemoizedSelector<Record<string, any>, string | null>
} = dinoFeature;
