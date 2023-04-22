import { createReducer, on} from "@ngrx/store";
import {initialState} from "./notification.state";
import {NotificationActions} from "./notification.actions";

export const notificationReducer = createReducer(
    initialState,
    on(NotificationActions.showNotificationItem, (state, {notification}) => ({
      ...state,
      notification: notification
    })),

    on(NotificationActions.deleteNotification, (state) => ({
      ...state,
      notification: null
    }))
  );
