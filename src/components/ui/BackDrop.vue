<template>
  <div class="backdrop">
    <slot></slot>
  </div>
</template>

<style scoped>
.backdrop {
  background: linear-gradient(rgba(0, 0, 0, 0.493), rgba(0, 0, 0, 1)),
    url('../../assets/img/showcase.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 400px;
  border: 1px solid black;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  color: #fff;
  font-family: var(--font-agency);
}
.backdrop p {
  font-size: 1.3rem;
}
</style>
