<template>
  <header id="header">
    <div class="container">
      <router-link to="/">
        <div class="logo">
          coach<span class="Oo">O</span><span>!</span>
        </div></router-link
      >
      <nav class="nav">
        <ul class="links">
          <li class="link">
            <router-link to="/">Home</router-link>
          </li>
          <li class="link">
            <router-link to="/coaches">Coaches</router-link>
          </li>
          <li class="link">
            <router-link to="/contact-us">Contact</router-link>
          </li>
          <li class="link">
            <router-link to="/about">About</router-link>
          </li>
          <li class="link btn--register btn" v-if="!isLoggedIn">
            <router-link to="/auth">Signin as coach</router-link>
          </li>
          <li class="link btn--register btn" v-if="isLoggedIn">
            <router-link to="/register">Register as coach</router-link>
          </li>
          <li class="link btn--register btn" v-if="isLoggedIn">
            <router-link to="/request-page">Requests</router-link>
          </li>
        </ul>

        <span class="bar" @click="hideSideBar"><i class="fa fa-bars"></i></span>
      </nav>
    </div>
  </header>
</template>

<script>
// const header = document.getElementById('header');
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuth;
    }
  },
  data() {
    return {
      // sideBarClick: false
    };
  },
  methods: {
    hideSideBar() {
      // this.sideBarClick = !this.sideBarClick;
      document.querySelector('.links').classList.toggle('toggle');
    }
  }
};
</script>

<style scoped>
header {
  background: black;
  padding: 0.5rem 0;
  border-bottom: 4px solid var(--vue-light-color);
  position: relative;
}
.bar {
  position: absolute;
  top: 40%;
  right: 10%;
  transform: translate(-40%, -10%);
  display: none;
  color: #fff;
  font-size: 1.5rem;
}
.btn {
  padding: 0.5rem 1rem !important;
  border-radius: 3rem;
  transition: all ease-in-out 0.3s;
}
.btn:hover {
  background-color: transparent !important;
}
.container,
.links {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.link {
  padding: 0 1rem;
}
.link a {
  color: #fff;
  font-size: 1.1rem;
  text-transform: capitalize;
}
.link a:hover,
.link a.active {
  color: var(--vue-light-color);
}

@media (max-width: 1000px) {
  .bar {
    display: block;
  }
  .links {
    position: absolute;
    top: 100%;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    height: calc(100vh - 48px);
    width: 40%;
    padding: 2rem;
    transition: 0.5s all ease-in;
    background-color: #000;
    z-index: 200;
    transform: translateX(100%);
  }
  .toggle {
    transform: translateX(0px);
  }
  .link {
    padding: 1rem 0;
  }
  .links li a {
    text-align: left;
    margin: 0;
  }
  .btn--register {
    margin: 0;
    font-size: 1rem;
    margin-top: 1rem;
  }
}
</style>
