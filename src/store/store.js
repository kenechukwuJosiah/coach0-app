import { createStore } from 'vuex';
import coachModule from './moduels/coach/index.js';
import requestModule from './moduels/request/index.js';
import AuthModule from './auth/index.js';

const store = createStore({
  modules: {
    coachData: coachModule,
    requests: requestModule,
    auth: AuthModule
  }
});

export default store;
