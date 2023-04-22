import {createSelector} from "@ngrx/store";
import {dinoFeature} from "../dino/dino.reducers";
import {historyFeature} from "./history.reducers";


const historyCollectionFullSelector = createSelector(
  historyFeature.selectHistoryCollection,
  dinoFeature.selectDinoCollection,
  (historyCollection, dinoCollection) => {
    return historyCollection.map((history) => ({
      ...history,
      dinoModel: dinoCollection.find((dino) => history.dinoReference === dino.id)
    }))
  }
);

const historyCollectionCountSelector = createSelector(
  historyFeature.selectHistoryCollection,
  (state) => state.length
)

export const historySelectors = {
  historyCollectionFullSelector,
  historyCollectionCountSelector
}
