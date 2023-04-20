import {createFeature, createReducer, on} from "@ngrx/store";
import {HistoryActions} from "./history.actions";
import {initialState} from "./history.state";

export const historyFeature = createFeature( {
  name: "historyState",
  reducer: createReducer(
    initialState,
    on(HistoryActions.addHistoryItem, (state, {newHistoryItem}) => ({
      ...state,
        historyCollection: [newHistoryItem, ...state.historyCollection]
    }))
  )
});
