import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {Dino} from "./dino.model";

export const DinoActions = createActionGroup({
  source: "[Dino Card Component]",
  events: {
    'Load Dinos': emptyProps(),
    'Load Dinos Success': props<{dinoCollection: Dino[]}>(),
    'Load Dinos Error': props<{error: any}>(),
    'Create new Dino': props<{newDino: Dino}>(),
    'Create new Dino Success': props<{newDino: Dino}>()
  }
})
