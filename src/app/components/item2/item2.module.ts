import { StoreModule } from "@ngrx/store";
import {items2Feature} from "./item2.reducers";
import {NgModule} from "@angular/core";

@NgModule({
  imports: [StoreModule.forFeature(items2Feature)],
})
export class Item2Module {}
