import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {Notification} from "./notification.model";

export const NotificationActions = createActionGroup({
  source: '[Notification Component]',
  events: {
    'Show Notification Item': props<{notification: Notification}>(),
    'Delete Notification': emptyProps()
  }
});
