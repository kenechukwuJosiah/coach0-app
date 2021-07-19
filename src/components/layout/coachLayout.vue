<template>
  <div class="container">
    <section class="coach__wrapper">
      <!-- FILTER COACHES -->
      <div class="sidebar">
        <slot name="sidebar"></slot>
      </div>
      <!-- COACHE LIST -->
      <div class="main">
        <slot default></slot>
      </div>
    </section>
  </div>
</template>

<style scoped>
.coach__wrapper {
  display: flex;
  margin-bottom: 1rem;
}
.sidebar {
  margin-right: 2.5rem;
}
.main {
  flex-basis: 80%;
}
@media (max-width: 900px) {
  .coach__wrapper {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>
