import { loadedItems } from './../actions/items.actions';
import { ItemsState } from './../../core/models/Items.state';
import { createReducer, on } from '@ngrx/store'; //TODO <----
import { toggleLoading } from '../actions/items.actions';


export const initialState: ItemsState = { loading: false, items: [] }

export const itemsReducer = createReducer(

  initialState,
  on(toggleLoading, (prevState) => {
    const newState = {
      loading: !prevState.loading
    }
    return { ...prevState, ...newState }
  }),

  on(loadedItems, (prevState, { items }) => {
    const newState = {
      loading: !prevState.loading,
      items
    }
    return { ...prevState, ...newState }
  })
);
