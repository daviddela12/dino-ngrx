import {dinoFeature} from "./dino.reducers";
import {createSelector} from "@ngrx/store";
import {dinoAdapter} from "./dino.state";
import {selectRouteParam, selectRouteParams} from "../router.selectors";
import {state} from "@angular/animations";

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = dinoAdapter.getSelectors(dinoFeature.selectDinoState);

const selectDinoById = createSelector(
  selectEntities,
  selectRouteParams,
  (state, {dinoId}) => {
    return state[dinoId]
  }
);

export const dinoSelectors = {
  selectDinoById,
  selectAll,
  selectEntities,
  selectIds
}
