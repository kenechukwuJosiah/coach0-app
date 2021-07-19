<template>
  <div class="wrapper">
    <div v-if="isLoading" class="spiner">
      <p>pls wait...</p>
      <loading-spinner></loading-spinner>
    </div>
    <error-modal
      :show="!!error"
      title="An error occurred"
      @close="handleError"
      v-if="!isLoading"
    >
      <h2>{{ error }}</h2>
      <p>
        Pls make sure internet connection is on.
      </p>
    </error-modal>

    <div class="form__wrapper">
      <form @submit.prevent="submitForm">
        <div>
          <label for="email">Email</label>
          <input type="email" name="email" id="email" v-model.trim="email" />
        </div>
        <div>
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            v-model.trim="password"
          />
        </div>
        <p v-if="formIsValid" style="color: red">
          Make sure filled in the fields properly and password must be at least
          6
        </p>
        <button class="btn--auth">{{ loginCaption }}</button>
        <button type="button" @click="switchAuthMode">
          {{ signInCaption }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      mode: 'login',
      formIsValid: false,
      isLoading: false,
      error: null
    };
  },
  computed: {
    loginCaption() {
      if (this.mode === 'login') {
        return 'login';
      } else {
        return 'signup';
      }
    },
    signInCaption() {
      if (this.mode === 'login') {
        return 'signup instead';
      } else {
        return 'login instead';
      }
    }
  },
  methods: {
    async submitForm() {
      if (
        !this.email.includes('@') ||
        this.email === '' ||
        this.password.length < 6
      ) {
        this.formIsValid = true;
        return;
      }
      const actionData = {
        email: this.email,
        password: this.password
      };
      try {
        if (this.mode === 'login') {
          //login...
          this.isLoading = true;
          await this.$store.dispatch('login', actionData);
        } else {
          this.isLoading = true;
          await this.$store.dispatch('signup', actionData);
        }
        const redirectUrl = '/' + (this.$route.query.redirect || 'coaches');
        this.$router.replace(redirectUrl);
      } catch (error) {
        this.isLoading = false;
        const errMs = (error.message = 'Oops!! Error occured, pls try again!');
        this.error = errMs;
      }
      this.isLoading = false;

      this.email = '';
      this.password = '';
      this.formIsValid = false;
    },
    switchAuthMode() {
      if (this.mode === 'login') {
        this.mode = 'signup';
      } else {
        this.mode = 'login';
      }
    },
    handleError() {
      this.error = null;
    }
  }
};
</script>

<style scoped>
h2,
p {
  margin: 0.4rem 0;
}
button {
  background: none;
  color: #000;
  margin-top: 0.5rem;
}
.btn--auth {
  background-color: var(--vue-light-color);
}
.wrapper {
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form__wrapper {
  min-width: 450px;
  margin: 0 auto;
  background-color: rgb(231, 227, 227);
  padding: 1rem;
  border-radius: 0.3rem;
}
label {
  display: block;
  margin: 0.5rem 0;
  font-family: var(--font-agency);
}
input {
  width: 100%;
  padding: 0.6rem;
  border: none;
  outline: none;
}
</style>
