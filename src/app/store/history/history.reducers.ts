import {createReducer, on} from "@ngrx/store";
import {HistoryActions} from "./history.actions";
import {HistoryState, initialState} from "./history.state";

export const historyReducer = createReducer(
  initialState,
  on(HistoryActions.addHistoryItem, (state, {newHistoryItem}) => ({
    ...state,
      historyCollection: [newHistoryItem, ...state.historyCollection]
  })
  )
);
