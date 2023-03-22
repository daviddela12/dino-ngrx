import {AppState} from "../../app.state";
import {createSelector} from "@ngrx/store";

// TODO HACER SELECTORS CON CreateFeatureSelector<fromProyects.ProjectState> instead of the next one
export const itemsStateSelector = (state: AppState) => state.itemsState;

export const itemsSelector = createSelector(
  itemsStateSelector,
  (state) => state.items
);

export const loadingItemsSelector = createSelector(
  itemsStateSelector,
  (state) => state.loading
);



