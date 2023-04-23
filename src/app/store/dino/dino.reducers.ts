import {createReducer, on} from "@ngrx/store";
import {initialState} from "./dino.state";
import {DinoActions} from "./dino.actions";
import {Dino} from "./dino.model";

export const dinoReducer = createReducer(
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
        dino => dino.id === updatedDino.id ? {...dino, ...updatedDino} : dino),
      // ANOTHER WAY TO UPDATE DINO Object.assign({}, updatedDino)
      loadingDino: false
    })),

    on(DinoActions.deleteDinoSuccess, (state, {deletedDinoId}) => ({
        ...state,
        loadingDino: false,
        dinoCollection: state.dinoCollection.filter((dino: Dino) => dino.id !== deletedDinoId)
    })),

    on(DinoActions.failureDino, (state) => ({
      ...state,
      loadingDino: false
    }))
  );
