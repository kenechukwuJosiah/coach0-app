export default {
  async coachUpdate(context, payload) {
    const testId = context.rootGetters.userId;

    const token = context.rootGetters.token;
    const res = await fetch(
      `https://coach0-default-rtdb.firebaseio.com/coaches/${testId}.json?auth=${token}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      }
    );
    // console.log(res);
    if (!res.ok) {
      // run error
      alert('not successful');
    }
    context.commit('newCoachReg', payload);
    context.getters.isRegistered = false;
    // console.log(context);
  },

  async loadCoaches(context) {
    if (!context.getters.shouldUpdate) return;

    const res = await fetch(
      `https://coach0-default-rtdb.firebaseio.com/coaches.json`
    );

    const resData = await res.json();

    if (!res.ok) {
      console.log('error occured');
      throw new Error(resData.message || 'Fail to Fetch Coaches');
    }
    const coaches = [];

    for (const coach of Object.values(resData)) {
      // console.log(i);
      coaches.push(coach);
    }

    context.commit('setCoaches', coaches);
    context.commit('setFetchTimeStamp');
  }
};
