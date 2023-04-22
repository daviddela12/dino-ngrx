import {ActionReducerMap} from "@ngrx/store";
import {HistoryState} from "./history/history.state";
import {historyReducer} from "./history/history.reducers";
import {DinoState} from "./dino/dino.state";
import {NotificationState} from "./notification/notification.state";
import {dinoReducer} from "./dino/dino.reducers";
import {notificationReducer} from "./notification/notification.reducers";

// Fuente de la verdad
export interface AppState {
  dino: DinoState,
  notification: NotificationState,
  history: HistoryState
}

// Es como la base de datos en lo que se refiere a las tablas, relaciones etc.
export const AppReducers: ActionReducerMap<AppState> = {
  dino: dinoReducer,
  notification: notificationReducer,
  history: historyReducer
}
