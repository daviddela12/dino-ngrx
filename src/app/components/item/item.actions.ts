import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {Item} from "./item.model";

export const ItemActions = createActionGroup({
  source: "[Item Component]",
  events: {
    'Load Items': emptyProps(),
    'Load Items Success': props<{items: Item[]}>()
  }
})
