import { createAction } from '@reduxjs/toolkit';

const fetchCategoriesRequest = createAction(
  'categories/fetchCategoriesRequest',
);
const fetchCategoriesSuccess = createAction(
  'categories/fetchCategoriesSuccess',
);
const fetchCategoriesError = createAction('categories/registerError');

// eslint-disable-next-line
export default {
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
  fetchCategoriesError,
};
