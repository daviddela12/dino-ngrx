import {dinoFeature} from "./dino.reducers";

const {
  name,
  reducer,
  selectDinoCollection, // type: MemoizedSelector<Record<string, any>, Product[]>
  selectLoadingDinoCollection, // type: MemoizedSelector<Record<string, any>, string | null>
  selectErrorDinoCollection
} = dinoFeature;
