import {createFeature, createReducer, on} from "@ngrx/store";
import {DinoState} from "./dino.state";
import {DinoActions} from "./dino.actions";

// 1 Initial State
export const initialState: DinoState = {
  dinoCollection: [],
  loadingDinoCollection: false,
  errorDinoCollection: ""
}

export const dinoFeature = createFeature({
  name: "dinoState",
  reducer: createReducer(
    initialState,
    on(DinoActions.loadDinos, (state) => ({
      ...state,
      loadingDinoCollection: true,
      errorDinoCollection: null
    })),

    on(DinoActions.loadDinosSuccess, (state, {dinoCollection}) => ({
      ...state,
      loadingDinoCollection: false,
      dinoCollection,
      errorDinoCollection: null
    })),

    on(DinoActions.loadDinosError, (state, {error}) => ({
      ...state,
      loadingDinoCollection: false,
      dinoCollection: [],
      errorDinoCollection: error
    })),

    on(DinoActions.createNewDino, (state, {newDino}) => ({
      ...state,
      dinoCollection: [...state.dinoCollection, newDino]
    }))
  )
});
