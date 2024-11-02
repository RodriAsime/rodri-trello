<template>
  <button class="main-button">
    <slot></slot>
  </button>
</template>
<style scoped>
.main-button {
  background-color: var(--baker-miller-pink);
  color: var(--pure-white);
  padding: 1rem 2rem;
  border: none;
  outline: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1.2rem;
  width: 100%;
}
</style>
