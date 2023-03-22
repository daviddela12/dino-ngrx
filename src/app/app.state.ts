import {ActionReducerMap} from "@ngrx/store";
import {ItemState} from "./components/item/item.state";
import {loadItemsReducer} from "./components/item/item.reducers";

// Fuente de la verdad
export interface AppState {
  itemsState: ItemState
}
// Es como la base de datos
export const AppReducers: ActionReducerMap<AppState> = {
  itemsState: loadItemsReducer
}
