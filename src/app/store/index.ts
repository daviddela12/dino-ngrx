import {ActionReducer, MetaReducer} from "@ngrx/store";
import {localStorageSync} from "ngrx-store-localstorage";

/**
// Fuente de la verdad
export interface AppState {
  historyState: HistoryState
}
**/
 /**
// Es como la base de datos en lo que se refiere a las tablas, relaciones etc.
export const AppReducers: ActionReducerMap<AppState> = {
  historyState: historyReducer
}
**/
const reducerKeys = ['dino', 'history'];
function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: reducerKeys})(reducer);
}
export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
