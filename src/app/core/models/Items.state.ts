
import { ItemModel } from "./Items.interface";

export interface ItemsState {
  loading: boolean,
  items: ReadonlyArray<ItemModel>;
}
