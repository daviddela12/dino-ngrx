import {createActionGroup, props} from "@ngrx/store";
import {History} from "./history.model";

export const HistoryActions = createActionGroup({
  source: '[History Component]',
  events: {
    'Add History Item': props<{newHistoryItem: History}>()
  }
});
