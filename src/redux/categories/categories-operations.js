import axios from 'axios';
import categoriesActions from './categories-actions';

const fetchCategories = () => async dispatch => {
  dispatch(categoriesActions.fetchCategoriesRequest());

  try {
    const categories = await axios.get('/transactions/categories');

    dispatch(
      categoriesActions.fetchCategoriesSuccess(categories.data.data.categories),
    );
  } catch (error) {
    dispatch(categoriesActions.fetchCategoriesError(error.message));
  }
};

// eslint-disable-next-line
export default { fetchCategories };
