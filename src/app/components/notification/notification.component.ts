import {Component} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Notification} from "../../store/notification/notification.model";
import {notificationFeature} from "../../store/notification/notification.reducers";
import {NotificationActions} from "../../store/notification/notification.actions";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {

  notification$: Observable<Notification>;

  constructor(private store: Store) {
    this.notification$ = this.store.pipe(select(notificationFeature.selectNotification));
  }

  deleteNotification() {
    this.store.dispatch(NotificationActions.deleteNotification());
  }

}
