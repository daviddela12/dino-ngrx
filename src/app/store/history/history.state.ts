import {History} from "./history.model";
import {storage} from "../storage";

export interface HistoryState {
  historyCollection: History[]
}

const historyStorage: HistoryState = storage.getItem("history");

export const initialState: HistoryState = {
  historyCollection: historyStorage.historyCollection ? historyStorage.historyCollection : []
}
