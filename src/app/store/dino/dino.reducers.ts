import {createFeature, createReducer, on} from "@ngrx/store";
import {DinoState} from "./dino.state";
import {DinoActions} from "./dino.actions";

// 1 Initial State
export const initialState: DinoState = {
  dinoCollection: [],
  loading: false
}

export const dinoFeature = createFeature({
  name: "dinoState",
  reducer: createReducer(
    initialState,
    on(DinoActions.loadDinos, (state) => ({
      ...state,
      loading: true
    })),
    on(DinoActions.loadDinosSuccess, (state, {dinoCollection}) => ({
      ...state,
      loading: false,
      dinoCollection
    }))
  )
});
