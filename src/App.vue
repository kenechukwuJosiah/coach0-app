<template>
  <div class="wrapper">
    <router-link
      v-if="isLoggedOut"
      class="logout__btn"
      to="/auth"
      @click="logout"
      >Logout</router-link
    >
    <the-header></the-header>
    <div class="main">
      <router-view v-slot="slotProps">
        <transition name="animate-route" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
    </div>
  </div>
  <div>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';
export default {
  components: {
    TheHeader,
    TheFooter
  },
  computed: {
    isLoggedOut() {
      return this.$store.getters.isAuth;
    },
    didAutoLogout() {
      return this.$store.getters.didLogout;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    }
  },
  watch: {
    didAutoLogout(curVal, lastVal) {
      if (curVal && curVal !== lastVal) {
        this.$router.replace('/coaches');
      }
    }
  },
  created() {
    this.$store.dispatch('autoLogin');
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lobster+Two&family=Zen+Loop:ital@0;1&display=swap');
:root {
  --font-agency: 'Agency FB';
  --font-regular: 'Gabriola', 'Lobster Two';
  --font-bold: 'Elephant';
  --font-style: 'Herr Von Muellerhoff';
  --vue-light-color: #33cc00;
  --vue-dark-color: #134d00;
  --dark: #080e06;
  --primary-color: #0066cc;
  --secondry-color: #003366;
}
* {
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
  min-height: 100%;
}
body {
  margin: 0;
  padding: 0;
  font-family: var(--font-regular);
  font-size: 20px;
  line-height: 1.2;
  position: relative;
}
.wrapper {
  overflow: hidden;
}
/* btn logout */
.logout__btn {
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: #fff;
  position: absolute;
  top: 100px;
  right: 20px;
  border-radius: 0.3rem;
}
/* logo */
.logo {
  color: var(--primary-color);
  font-size: 2.2rem;
}
.logo span {
  color: var(--vue-light-color);
  font-size: 2.5rem;
}
/* utitly */
li,
ul {
  list-style-type: none;
  margin: 0;
}
a {
  text-decoration: none;
}
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.container {
  width: 80%;
  margin: 0 auto;
}
.btn {
  background-color: var(--vue-light-color);
  transition: all ease-in-out 0.3s;
}
.btn:hover {
  background-color: var(--primary-color);
}
button {
  outline: none;
  border: none;
  border-radius: 3rem;
  color: #fff;
  padding: 0.7rem 1.5rem;
  font-size: 0.9rem;
  cursor: pointer;
}
/* Social media icons */
.social__media--link {
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 1rem 0;
}
.social__media--link .social__media {
  margin: 0 0.3rem;
}
.social__media--link-1 {
  color: blue;
}
.social__media--link-2 {
  color: brown;
}
.social__media--link-3 {
  color: rgb(15, 220, 247);
}
/* Register as coach button */
.btn--register {
  border: 1px solid var(--vue-light-color);
  background-color: transparent;
  margin-left: 0.8rem;
  transition: all ease-in-out 0.3s;
}
.btn--register a,
.btn a {
  color: #fff;
}

span.Oo {
  color: var(--vue-light-color);
}

.animate-route-enter-from,
.animate-route-leave-to {
  opacity: 0;
}
.animate-route-enter-active,
.animate-route-leave-active {
  transition: all ease-in 0.4s;
}
.animate-route-enter-to,
.animate-route-leave-from {
  opacity: 1;
}
/* footer wrapper */
.footer-wrapper {
  position: absolute;
  top: 100%;
}
/* spinner */
.spiner {
  position: fixed;
  width: 200px;
  height: 200px;
  border-radius: 1rem;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
  background-color: black;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
/* error message */
.errorTxt {
  text-align: center;
  margin-bottom: 3rem;
}
@media (max-width: 800px) {
  .container {
    width: 90%;
  }
}
</style>
