import {Component} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Notification} from "../../store/notification/notification.model";
import {NotificationActions} from "../../store/notification/notification.actions";
import {notificationSelectors} from "../../store/notification/notification.selectors";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {

  notification$: Observable<Notification> = new Observable<Notification>();

  constructor(private store: Store) {
    this.notification$ = this.store.pipe(select(notificationSelectors.notificationSelector));
  }

  deleteNotification() {
    this.store.dispatch(NotificationActions.deleteNotification());
  }

}
