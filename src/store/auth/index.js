import getters from './getters.js';
import actions from './actions.js';
import mutations from './mutations.js';

export default {
  state() {
    return {
      userId: null,
      tokenExpiration: false,
      token: null,
      didLogout: false
    };
  },
  mutations,
  getters,
  actions
};
