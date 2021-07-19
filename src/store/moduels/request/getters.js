export default {
  requests(state) {
    return state.request;
  },
  validator(state) {
    if (state.request && state.request.length > 0) return false;
    else return true;
  },
  shouldFetchRequest(state) {
    if (!state.lastFetch) {
      return true;
    }

    const currentTimeStamp = new Date().getTime();
    return (currentTimeStamp - state.lastFetch) / 1000 > 60;
  },
  isRegistered(state) {
    return state.isRegistered;
  }
};
