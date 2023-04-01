import {dinoFeature} from "./dino.reducers";

const {
  name,
  reducer,
  selectDinoCollection, // type: MemoizedSelector<Record<string, any>, Product[]>
  selectLoading, // type: MemoizedSelector<Record<string, any>, string | null>
} = dinoFeature;
