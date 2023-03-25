import {AlertState} from "./alert.state";
import {createReducer, on} from "@ngrx/store";
import {AlertActions} from "./alert.actions";

export const initialState: AlertState = {
  alerts: []
}

// TODO VER Adapters

export const alertReducer = createReducer(
  initialState,
  on(AlertActions.addAlert, (state, {newAlert}) => ({
    ...state,
    alerts: [...state.alerts, newAlert]
  })
  )
);
