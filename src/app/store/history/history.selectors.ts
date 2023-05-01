import {createFeatureSelector, createSelector} from "@ngrx/store";
import {HistoryState} from "./history.state";

const historyStateSelector = createFeatureSelector<HistoryState>("history")

const historyCollectionSelector = createSelector(
  historyStateSelector,
  (state) => state.historyCollection
);

const historyCollectionFullSelector = createSelector(
  historyStateSelector,
  //dinoSelectors.selectEntities,
  (historyState) => {
    return historyState.historyCollection.map((history) => ({
      ...history,
      dinoModel: {}
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
