<template>
  <div class="showcase">
    <div class="container">
      <div class="write-up">
        <h2>
          Welcome to <span>coach<span class="Oo">O!</span></span
          >...
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
          incidunt possimus tempore vel? <br />
          Dolorem cumque nemo illo. Fuga iusto ea culpa esse veritatis,
          voluptatibus quia doloremque, nobis suscipit consequatur ullam?
        </p>
        <div class="buttons">
          <base-button mode="btn" @click="getStarted">Get Started</base-button>
          <base-button mode="btn--register" @click="registerAsCoach"
            >Register as Coach</base-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '../../components/ui/BaseButton.vue';
export default {
  components: {
    BaseButton
  },
  methods: {
    getStarted() {
      this.$router.push('/coaches');
    },
    registerAsCoach() {
      this.$router.push('/auth');
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
}
.showcase {
  background: linear-gradient(rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.8)),
    url('../../assets/img/showcase.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: calc(100vh - 48px);
  width: 100%;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.write-up {
  text-align: center;
  color: #fff;
}
.write-up h2 {
  font-family: var(--font-style);
  font-size: 4.5rem;
  text-transform: capitalize;
  font-weight: lighter;
}
.write-up span {
  color: var(--primary-color);
  font-weight: 600;
}
.write-up p {
  font-size: 1.3rem;
  font-family: var(--font-regular);
  margin-bottom: 3rem;
}
.write-up h2 span .Oo {
  color: var(--vue-light-color);
}
</style>
