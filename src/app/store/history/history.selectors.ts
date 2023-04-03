import {createFeatureSelector, createSelector} from "@ngrx/store";
import {HistoryState} from "./history.state";

const historyStateSelector = createFeatureSelector<HistoryState>("historyState")

const historyCollectionSelector = createSelector(
  historyStateSelector,
  (state) => state.historyCollection
);

export const HistorySelectors = {
  historyStateSelector,
  historyCollectionSelector
}
