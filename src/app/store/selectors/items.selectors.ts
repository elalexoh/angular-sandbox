import { ItemsState } from './../../core/models/Items.state';
import { createSelector } from '@ngrx/store';
import { AppState } from './../app.state';

//TODO: ESTO ES EL EQUIVALENTE A UN GETTER DE VUEX

export const selectItemsFeature = (state: AppState) => state.items;//TODO: PADRE

export const selectListItems = createSelector(
  selectItemsFeature, //?? Identificador del padre
  (state: ItemsState) => state.items
);

export const selectLoading = createSelector(
  selectItemsFeature,
  (state: ItemsState) => state.loading //TODO: HIJO
);
