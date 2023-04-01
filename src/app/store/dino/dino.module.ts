import { StoreModule } from "@ngrx/store";
import {NgModule} from "@angular/core";
import {dinoFeature} from "./dino.reducers";

@NgModule({
  imports: [StoreModule.forFeature(dinoFeature)],
})
export class DinoModule {}
