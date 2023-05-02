
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
