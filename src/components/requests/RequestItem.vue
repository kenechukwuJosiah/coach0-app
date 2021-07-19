<template>
  <div class="req_wrap">
    <div class="name">
      <h1>{{ name }}</h1>
    </div>
    <div class="e-message">
      <h4>
        Email: <a :href="emailLink">{{ email }}</a>
      </h4>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['email', 'name', 'message'],
  computed: {
    emailLink() {
      return `mailto:${this.email}`;
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.req_wrap {
  padding: 0.5rem 1.5rem;
  width: 80%;
  margin: 3rem auto;
  display: flex;
  justify-content: space-between;
  border-radius: 0.3rem;
  background-color: rgb(236, 230, 230);
  box-shadow: -3px 16px 14px -7px rgba(0, 0, 0, 0.73);
  -webkit-box-shadow: -3px 16px 14px -7px rgba(0, 0, 0, 0.73);
  -moz-box-shadow: -3px 16px 14px -7px rgba(0, 0, 0, 0.73);
}
.e-message {
  padding: 1rem;
  z-index: 100;
  max-width: 60%;
}
.e-message p {
  margin-top: 0.8rem;
}
.name {
  position: relative;
}
.name h1 {
  position: absolute;
  width: 250px;
  top: -20px;
  left: -40px;
  padding: 0.8rem;
  border-radius: 0.3rem;
  background-color: rgb(236, 230, 230);
  font-size: 2.3rem;
  text-align: center;
  color: var(--vue-light-color);
}
@media (max-width: 900px) {
  .req_wrap {
    width: 90%;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .e-message {
    margin-top: 1.5rem;
    width: 90%;
  }
}
</style>
