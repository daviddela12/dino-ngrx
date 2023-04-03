import {ActionReducerMap} from "@ngrx/store";
import {ItemEffects} from "./components/item/item.effects";
import {ItemState} from "./components/item/item.state";
import {itemReducer} from "./components/item/item.reducers";
import {Item2Effects} from "./components/item2/item2.effects";
import {HistoryState} from "./store/history/history.state";
import {historyReducer} from "./store/history/history.reducers";

// Fuente de la verdad
export interface AppState {
  itemsState: ItemState,
  historyState: HistoryState
}

// Es como la base de datos en lo que se refiere a las tablas, relaciones etc.
export const AppReducers: ActionReducerMap<AppState> = {
  itemsState: itemReducer,
  historyState: historyReducer
}

export const AppEffects = [ItemEffects, Item2Effects]
