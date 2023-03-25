import {ActionReducerMap} from "@ngrx/store";
import {ItemEffects} from "./components/item/item.effects";
import {AlertState} from "./components/alert/alert.state";
import {alertReducer} from "./components/alert/alert.reducers";
import {ItemState} from "./components/item/item.state";
import {itemReducer} from "./components/item/item.reducers";
import {Item2Effects} from "./components/item2/item2.effects";

// Fuente de la verdad
export interface AppState {
  alertState: AlertState,
  itemsState: ItemState
}

// Es como la base de datos en lo que se refiere a las tablas, relaciones etc.
export const AppReducers: ActionReducerMap<AppState> = {
  alertState: alertReducer,
  itemsState: itemReducer
}

export const AppEffects = [ItemEffects, Item2Effects]
