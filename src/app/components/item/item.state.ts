import {Item} from "./item.model";

export interface ItemState {
  loading: boolean,
  items: Item[]
}
