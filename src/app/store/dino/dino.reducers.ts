import {createFeature, createReducer, on} from "@ngrx/store";
import {initialState} from "./dino.state";
import {DinoActions} from "./dino.actions";
import {Dino} from "./dino.model";

export const dinoFeature = createFeature({
  name: "dinoState",
  reducer: createReducer(
    initialState,
    on(DinoActions.loadDinos, (state) => ({
      ...state,
      loadingDino: true
    })),

    on(DinoActions.loadDinosSuccess, (state, {dinoCollection}) => ({
      ...state,
      loadingDino: false,
      dinoCollection: dinoCollection
    })),

    on(DinoActions.createNewDinoSuccess, (state, {newDino}) => ({
      ...state,
      dinoCollection: [...state.dinoCollection, newDino]
    })),

    on(DinoActions.getDinoById, DinoActions.updateDino, DinoActions.deleteDino, (state) => ({
      ...state,
      loadingDino: true
    })),

    on(DinoActions.getDinoByIdSuccess, (state, {dinoSelected}) => ({
      ...state,
      dinoSelected: dinoSelected,
      loadingDino: false
    })),

    on(DinoActions.updateDinoSuccess, (state, {updatedDino}) => ({
      ...state,
      dinoCollection: state.dinoCollection.map(
        dino => dino.id === updatedDino.id ? Object.assign({}, updatedDino) : dino),
      loadingDino: false
    })),

    on(DinoActions.deleteDinoSuccess, (state, {deletedDinoId}) => ({
        ...state,
        loadingDino: false,
        dinoCollection: state.dinoCollection.filter((dino: Dino) => dino.id !== deletedDinoId)
    }))
  )
});
