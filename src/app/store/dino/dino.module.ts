import {StoreFeatureModule, StoreModule} from "@ngrx/store";
import {NgModule} from "@angular/core";
import {dinoFeature} from "./dino.reducers";
import {EffectsModule} from "@ngrx/effects";
import {DinoEffects} from "./dino.effects";

@NgModule({
  imports: [
    StoreModule.forFeature(dinoFeature),
    EffectsModule.forFeature([DinoEffects])
  ],
})
export class DinoModule {}
