import {ActionReducerMap} from "@ngrx/store";
import {ItemState} from "./components/item/item.state";
import {itemReducer} from "./components/item/item.reducers";

// Fuente de la verdad
export interface AppState {
  itemState: ItemState
}
// Es como la base de datos en lo que se refiere a las tablas, relaciones etc.
export const AppReducers: ActionReducerMap<AppState> = {
  itemState: itemReducer
}
