import {createActionGroup, props} from "@ngrx/store";
import {Alert} from "./alert.model";

export const AlertActions = createActionGroup({
  source: '[Alert Component]',
  events: {
    'Add Alert': props<{newAlert: Alert}>()
  }
});
