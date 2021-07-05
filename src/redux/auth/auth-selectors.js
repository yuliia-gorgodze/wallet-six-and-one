const getIsAuthenticated = state => state.auth.isAuthenticated;
const getUsername = state => state.auth.user.name;
const getLoading = state => state.auth.loading;
const getError = state => state.auth.error;

// eslint-disable-next-line
export default { getIsAuthenticated, getUsername, getLoading, getError };
