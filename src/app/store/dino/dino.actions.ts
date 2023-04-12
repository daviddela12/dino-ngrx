import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {Dino} from "./dino.model";

export const DinoActions = createActionGroup({
  source: "[Dino Card Component]",
  events: {
    'Load Dinos': emptyProps(),
    'Load Dinos Success': props<{dinoCollection: Dino[]}>(),

    'Get Dino By Id': props<{dinoId: number}>(),
    'Get Dino By Id Success': props<{dinoSelected: Dino}>(),

    'Create new Dino': props<{newDino: Dino}>(),
    'Create new Dino Success': props<{newDino: Dino}>(),

    'Update Dino': props<{updatedDino: Dino}>(),
    'Update Dino Success': props<{updatedDino: Dino}>(),

    'Delete Dino': props<{deletedDinoId: number}>(),
    'Delete Dino Success': props<{deletedDinoId: number}>(),

    'Dinos Error': props<{error: any}>()
  }
})
