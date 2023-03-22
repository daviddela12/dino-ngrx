import {AppState} from "../../app.state";
import {createSelector} from "@ngrx/store";

export const itemsStateSelector = (state: AppState) => state.itemsState;

export const itemsSelector = createSelector(
  itemsStateSelector,
  (state) => state.items
);

export const loadingItemsSelector = createSelector(
  itemsStateSelector,
  (state) => state.loading
);
