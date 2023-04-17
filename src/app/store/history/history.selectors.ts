import {createFeatureSelector, createSelector} from "@ngrx/store";
import {HistoryState} from "./history.state";
import {dinoFeature} from "../dino/dino.reducers";

const historyStateSelector = createFeatureSelector<HistoryState>("historyState")

const historyCollectionSelector = createSelector(
  historyStateSelector,
  (state) => state.historyCollection
);

const historyCollectionFullSelector = createSelector(
  historyStateSelector,
  dinoFeature.selectDinoCollection,
  (historyState, dinoState) => {
    return historyState.historyCollection.map((history) => ({
      ...history,
      dinoModel: dinoState.find((dino) => history.dinoReference === dino.id)
    }))
  }
);

const historyCollectionCountSelector = createSelector(
  historyCollectionSelector,
  (state) => state.length
)

export const HistorySelectors = {
  historyStateSelector,
  historyCollectionSelector,
  historyCollectionFullSelector,
  historyCollectionCountSelector
}
