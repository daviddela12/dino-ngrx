import {NgModule} from "@angular/core";
import {StoreModule} from "@ngrx/store";
import {historyFeature} from "./history.reducers";

@NgModule({
  imports: [
    StoreModule.forFeature(historyFeature)
  ]
})
export class HistoryModule {}
