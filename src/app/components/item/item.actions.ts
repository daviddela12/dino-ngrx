import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {Item} from "./item.model";

/**
export const loadItems = createAction(
  '[Item Component] Load items' //TODO type*
);

export const loadItemsSuccess = createAction(
  '[Item Component] Load Items Success',
  props<{ items: Item[] }>()
)
**/

export const ItemActions = createActionGroup({
  source: "[Item Component]",
  events: {
    'Load Items': emptyProps(),
    'Load Items Success': props<{items: Item[]}>()
  }
})
