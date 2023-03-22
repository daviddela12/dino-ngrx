import {ItemState} from "./item.state";
import {createReducer, on} from "@ngrx/store";
import {ItemActions} from "./item.actions";

// 1 Initial State
export const initialState: ItemState = {
  loading: false,
  items: []
}

export const loadItemsReducer = createReducer(
  initialState,
  on(ItemActions.loadItems, (state) => ({
    ...state,
    loading: true
  })),
  on(ItemActions.loadItemsSuccess, (state, {items}) => ({
    ...state,
    loading: false,
    items
  }))
)
