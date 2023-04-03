import {createReducer, on} from "@ngrx/store";
import {HistoryActions} from "./history.actions";
import {HistoryState} from "./history.state";

export const initialState: HistoryState = {
  historyCollection: []
}

export const historyReducer = createReducer(
  initialState,
  on(HistoryActions.addHistoryItem, (state, {newHistoryItem}) => ({
    ...state,
      historyCollection: [...state.historyCollection, newHistoryItem]
  })
  )
);
