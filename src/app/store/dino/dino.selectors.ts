import {dinoFeature} from "./dino.reducers";
import {createSelector} from "@ngrx/store";
import {dinoAdapter} from "./dino.state";

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = dinoAdapter.getSelectors(dinoFeature.selectDinosState);

const selectDinoById = (dinoId: number) => createSelector(
  dinoFeature.selectEntities,
  (state) => state[dinoId]
);

export const dinoSelectors = {
  selectDinoById,
  selectAll,
  selectEntities,
  selectIds
}
