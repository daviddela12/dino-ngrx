import {createFeatureSelector, createSelector} from "@ngrx/store";
import {Dino} from "./dino.model";
import {DinoState} from "./dino.state";

const dinoStateSelector = createFeatureSelector<DinoState>("dino")

const dinoCollectionSelector = createSelector(
  dinoStateSelector,
  (state) => state.dinoCollection
);

const dinoSelectedSelector = createSelector(
  dinoStateSelector,
  (state) => state.dinoSelected
);

const dinoLoadingSelector = createSelector(
  dinoStateSelector,
  (state) => state.loadingDino
);

const selectDinoById = (dinoId: number) => createSelector(
  dinoCollectionSelector,
  (state: Dino[]) =>
    state.find((dino) => dino.id === dinoId)
);

export const dinoSelectors = {
  dinoCollectionSelector,
  dinoSelectedSelector,
  dinoLoadingSelector,
  selectDinoById
}
