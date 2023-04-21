import {History} from "./history.model";
import {storage} from "../storage";

export interface HistoryState {
  historyCollection: History[]
}

export const initialState: HistoryState = {
  historyCollection: storage.getItem("history").historyCollection
}
