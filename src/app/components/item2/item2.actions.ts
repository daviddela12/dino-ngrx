import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {Item2} from "./item2.model";

export const Item2Actions = createActionGroup({
  source: "[Item2 Component]",
  events: {
    'Load Items2': emptyProps(),
    'Load Items2 Success': props<{items: Item2[]}>()
  }
})
