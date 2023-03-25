import {Item2State} from "./item2.state";
import {createFeature, createReducer, on} from "@ngrx/store";
import {Item2Actions} from "./item2.actions";

// 1 Initial State
export const initialState: Item2State = {
  loading: false,
  items: []
}

export const items2Feature = createFeature({
  name: "itemsState2",
  reducer: createReducer(
    initialState,
    on(Item2Actions.loadItems2, (state) => ({
      ...state,
      loading: true
    })),
    on(Item2Actions.loadItems2Success, (state, {items}) => ({
      ...state,
      loading: false,
      items
    }))
  )
});
