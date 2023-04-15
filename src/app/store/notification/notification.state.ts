import {Notification} from "./notification.model";

export interface NotificationState {
  notification: Notification
}

export const initialState: NotificationState = {
  notification: null
}
