export default {
  signupUser(state, payload) {
    state.userId = payload.userId;
    state.token = payload.token;
    // state.tokenExpiration = payload.tokenExpiration;
    state.didLogout = false;
  },
  didLogout(state) {
    state.didLogout = true;
  }
};
