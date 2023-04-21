import {StoreModule} from "@ngrx/store";
import {NgModule} from "@angular/core";
import {dinoFeature} from "../../store/dino/dino.reducers";
import {EffectsModule} from "@ngrx/effects";
import {DinoEffects} from "../../store/dino/dino.effects";

@NgModule({
  imports: [
    StoreModule.forFeature(dinoFeature),
    EffectsModule.forFeature([DinoEffects])
  ],
})
export class DinoModule {}
