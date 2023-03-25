import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AlertState} from "../alert/alert.state";

const alertStateSelector = createFeatureSelector<AlertState>("alertState")

const alertsSelector = createSelector(
  alertStateSelector,
  (state) => state.alerts
);

export const AlertSelectors = {
  alertStateSelector,
  alertsSelector
}
