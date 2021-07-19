export default {
  requests(state, data) {
    return state.request.push(data);
  },
  loadRequests(state, data) {
    state.request = data;
  },
  lastFetch(state) {
    state.lastFetch = new Date().getTime();
  }
};
