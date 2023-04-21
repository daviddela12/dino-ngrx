import {createFeature, createReducer, on} from "@ngrx/store";
import {dinoAdapter, initialState} from "./dino.state";
import {DinoActions} from "./dino.actions";

export const dinoFeature = createFeature({
  name: "dino",
  reducer: createReducer(
    initialState,
    on(DinoActions.loadDinos, (state) => ({
      ...state,
      loadingDino: true
    })),

    on(DinoActions.loadDinosSuccess, (state, {dinoCollection}) => {
      return dinoAdapter.setAll(dinoCollection, {
        ...state,
        loadingDino: false
      })
    }),

    on(DinoActions.createNewDinoSuccess, (state, {newDino}) => {
      return dinoAdapter.addOne(newDino, state)
    }),

    on(DinoActions.getDinoById, DinoActions.updateDino, DinoActions.deleteDino, (state) => ({
      ...state,
      loadingDino: true
    })),

    on(DinoActions.getDinoByIdSuccess, (state, {dinoSelected}) => {
     return ({
        ...state,
        dinoSelected: dinoSelected.id,
        loadingDino: false
      })
    }),

    on(DinoActions.updateDinoSuccess, (state, {updatedDino}) => {
      return dinoAdapter.upsertOne(updatedDino, {
        ...state,
        loadingDino: false
      });
    }),

    on(DinoActions.deleteDinoSuccess, (state, {deletedDinoId}) => {
        return dinoAdapter.removeOne(deletedDinoId, {
          ...state,
          loadingDino: false
      })
    })
  )
});
