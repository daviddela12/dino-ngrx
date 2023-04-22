import {createFeatureSelector, createSelector} from "@ngrx/store";
import {NotificationState} from "./notification.state";

const notificationStateSelector = createFeatureSelector<NotificationState>("notification")

const notificationSelector = createSelector(
  notificationStateSelector,
  (state) => state.notification
);

export const notificationSelectors = {
  notificationSelector
}
