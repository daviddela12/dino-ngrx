import {createFeatureSelector, createSelector} from "@ngrx/store";
import {HistoryState} from "./history.state";
import {dinoFeature} from "../dino/dino.reducers";
import {dinoSelectors} from "../dino/dino.selectors";

const historyStateSelector = createFeatureSelector<HistoryState>("history")

const historyCollectionSelector = createSelector(
  historyStateSelector,
  (state) => state.historyCollection
);

const historyCollectionFullSelector = createSelector(
  historyStateSelector,
  dinoSelectors.selectEntities,
  (historyState, dinoState) => {
    return historyState.historyCollection.map((history) => ({
      ...history,
      dinoModel: dinoState[history.dinoReference]
    }))
  }
);

const historyCollectionCountSelector = createSelector(
  historyCollectionSelector,
  (state) => state.length
)

export const historySelectors = {
  historyStateSelector,
  historyCollectionSelector,
  historyCollectionFullSelector,
  historyCollectionCountSelector
}
