import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import categoriesActions from './categories-actions';

const initialUserState = {
  categoriesDefault: [
    'Основной',
    'Еда',
    'Авто',
    'Развитие',
    'Дети',
    'Дом',
    'Образование',
    'Остальные',
  ],
  newCategories: null,
};

const allCategories = createReducer(initialUserState, {
  [categoriesActions.fetchCategoriesSuccess]: (state, { payload }) => {
    const defaulCategories = state.categoriesDefault;
    const backCategories = payload.map(el => el.category);
    const newCategories = backCategories.filter(
      c => defaulCategories.indexOf(c) === -1 && c !== 'Доходы',
    );
    return {
      ...state,
      newCategories: newCategories,
    };
  },
});

const error = createReducer(null, {
  [categoriesActions.fetchCategoriesError]: (_, { payload }) => payload,

  [categoriesActions.fetchCategoriesSuccess]: () => null,
});

const loading = createReducer(false, {
  [categoriesActions.fetchCategoriesRequest]: () => true,
  [categoriesActions.fetchCategoriesSuccess]: () => false,
  [categoriesActions.fetchCategoriesError]: () => false,
});

export default combineReducers({
  allCategories,
  error,
  loading,
});
