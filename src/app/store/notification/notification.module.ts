import {NgModule} from "@angular/core";
import {StoreModule} from "@ngrx/store";
import {notificationFeature} from "./notification.reducers";

@NgModule({
  imports: [
    StoreModule.forFeature(notificationFeature)
  ]
})
export class NotificationModule {}
