let timer;
export default {
  async login(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'login'
    });
  },
  async signup(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'signup'
    });
  },

  async auth(context, payload) {
    const mode = payload.mode;

    let url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBNfN2guxfS7vvwuwrcNOhZH_Bklt68spA';

    if (mode === 'signup') {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBNfN2guxfS7vvwuwrcNOhZH_Bklt68spA';
    }
    const postData = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    });

    const res = await postData.json();

    if (!postData.ok) {
      throw new Error('Oops!! Login Failed');
    }

    const expiresIn = +res.expiresIn * 1000;
    const expirationDate = new Date().getTime() + expiresIn;

    localStorage.setItem('token', res.idToken);
    localStorage.setItem('userId', res.localId);
    localStorage.setItem('expirationDate', expirationDate);

    timer = setTimeout(() => {
      context.dispatch('autoLogout');
    }, expiresIn);

    context.commit('signupUser', {
      token: res.idToken,
      userId: res.localId
    });
  },
  autoLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const expirationDate = localStorage.getItem('expirationDate');

    const expiresIn = +expirationDate - new Date().getTime();

    if (expiresIn < 0) {
      return;
    }

    timer = setTimeout(() => {
      context.dispatch('autoLogout');
    }, expirationDate);

    if (token && userId) {
      context.commit('signupUser', {
        token: token,
        userId: userId
      });
    }
  },
  logout(context) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('expirationDate');

    clearTimeout(timer);

    context.commit('signupUser', {
      userId: null,
      token: null
    });
  },
  autoLogout(context) {
    context.dispatch('logout');
    context.commit('didLogout');
  }
};
