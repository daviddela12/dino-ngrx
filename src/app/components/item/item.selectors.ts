import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ItemState} from "./item.state";

export const itemStateSelector = createFeatureSelector<ItemState>("itemState")
// export const itemsStateSelector = (state: AppState) => state.itemsState;

export const itemsSelector = createSelector(
  itemStateSelector,
  (state) => state.items
);

export const loadingItemsSelector = createSelector(
  itemStateSelector,
  (state) => state.loading
);



