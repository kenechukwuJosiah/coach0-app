export default {
  userId(state) {
    return state.userId;
  },
  token(state) {
    return state.token;
  },
  isAuth(state) {
    return !!state.token;
  },
  didLogout(state) {
    return state.didLogout;
  }
};
