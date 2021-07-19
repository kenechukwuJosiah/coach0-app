<template>
  <div class="container">
    <div>
      <h1>Oops Page not found</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
        cupiditate placeat deleniti molestiae, voluptatibus quasi consectetur!
        Enim reiciendis eveniet aliquid?
      </p>
      <router-link class="coach--btn" to="/">Navigate back to Home</router-link>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 2rem;
  height: 95vh;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.coach--btn {
  padding: 0.4rem 0.7rem;
  background-color: var(--primary-color);
  font-size: 1rem;
  margin: 0.5rem 0;
  display: inline-block;
  border-radius: 0.3rem;
  color: #fff;
}
</style>
