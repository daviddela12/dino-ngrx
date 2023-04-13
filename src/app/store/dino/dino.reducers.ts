import {createFeature, createReducer, on} from "@ngrx/store";
import {DinoState} from "./dino.state";
import {DinoActions} from "./dino.actions";
import {Dino} from "./dino.model";

// 1 Initial State
export const initialState: DinoState = {
  dinoCollection: [],
  dinoSelected: null,
  loadingDino: false,
  errorDino: ""
}

export const dinoFeature = createFeature({
  name: "dino",
  reducer: createReducer(
    initialState,
    on(DinoActions.loadDinos, (state) => ({
      ...state,
      loadingDino: true,
      errorDino: null
    })),

    on(DinoActions.loadDinosSuccess, (state, {dinoCollection}) => ({
      ...state,
      loadingDino: false,
      dinoCollection,
      errorDino: null
    })),

    on(DinoActions.createNewDinoSuccess, (state, {newDino}) => ({
      ...state,
      dinoCollection: [...state.dinoCollection, newDino]
    })),

    on(DinoActions.getDinoById, DinoActions.updateDino, DinoActions.deleteDino, (state) => ({
      ...state,
      loadingDino: true,
      errorDino: null
    })),

    on(DinoActions.getDinoByIdSuccess, (state, {dinoSelected}) => ({
      ...state,
      dinoSelected: dinoSelected,
      loadingDino: false
    })),

    on(DinoActions.updateDinoSuccess, (state, {updatedDino}) => ({
      ...state,
      dinoCollection: state.dinoCollection.map(dino => dino.id === updatedDino.id ? Object.assign({}, updatedDino) : dino),
      loadingDino: false
    })),

    on(DinoActions.deleteDinoSuccess, (state, {deletedDinoId}) => ({
        ...state,
        loadingDino: false,
        dinoCollection: state.dinoCollection.filter((dino: Dino) => dino.id !== deletedDinoId)
    })),

    on(DinoActions.dinosError, (state, {error}) => ({
      ...state,
      loadingDino: false,
      dinoCollection: [],
      errorDino: error
    }))
  )
});
