import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ItemState} from "./item.state";


const itemStateSelector = createFeatureSelector<ItemState>("itemsState")
// export const itemsStateSelector = (state: AppState) => state.itemsState;

const itemsSelector = createSelector(
  itemStateSelector,
  (state) => state.items
);

const loadingItemsSelector = createSelector(
  itemStateSelector,
  (state) => state.loading
);

export const ItemSelectors = {
  itemStateSelector,
  itemsSelector,
  loadingItemsSelector
}
