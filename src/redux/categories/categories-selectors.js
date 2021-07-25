const getDefaultCategories = state =>
  state.categories.allCategories.categoriesDefault;
const getNewCategories = state => state.categories.allCategories.newCategories;

// eslint-disable-next-line
export default { getDefaultCategories, getNewCategories };
