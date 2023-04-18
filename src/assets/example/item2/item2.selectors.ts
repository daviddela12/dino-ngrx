import {items2Feature} from "./item2.reducers";

const {
  name,
  reducer,
  // feature selector
  // selectItems2State, // type: MemoizedSelector<Record<string, any>, ProductsState>
  // feature state properties selectors
  selectItems, // type: MemoizedSelector<Record<string, any>, Product[]>
  selectLoading, // type: MemoizedSelector<Record<string, any>, string | null>
} = items2Feature;
