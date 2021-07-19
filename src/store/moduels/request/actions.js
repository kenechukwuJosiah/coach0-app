export default {
  async uploadRequest(context, payload) {
    const testId = context.rootGetters.userId;
    const requestPost = await fetch(
      `https://coach0-default-rtdb.firebaseio.com/requests/${testId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(payload)
      }
    );
    if (!requestPost.ok) {
      throw new Error(requestPost.message || 'Failed to fetch request');
    }
    context.commit('loadRequests', payload);
  },

  async fetchRequests(context) {
    if (!context.getters.shouldFetchRequest) return;
    const testId = context.rootGetters.userId;

    const token = context.rootGetters.token;

    const res = await fetch(
      `https://coach0-default-rtdb.firebaseio.com/requests/${testId}.json?auth=${token}`
    );

    const resData = await res.json();

    if (!res.ok) {
      console.log('Error occured');
      throw new Error(res.message || 'Error Occured while fetching request');
    }

    const requests = [];
    for (const data of Object.values(resData)) {
      requests.push(data);
    }
    // console.log(resData);
    context.commit('loadRequests', requests);
    context.commit('lastFetch');
  }
};
