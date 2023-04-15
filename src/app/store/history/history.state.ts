import {History} from "./history.model";

export interface HistoryState {
  historyCollection: History[]
}

export const initialState: HistoryState = {
  historyCollection: []
}
