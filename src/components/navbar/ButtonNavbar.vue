<script setup lang="ts">
const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>
<template>
  <button class="button" @click="emit('click')">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  background-color: var(--semi-transparent);
  border: none;
  border-radius: 0.3rem;
  color: var(--pure-white);
  padding: 0.125rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  cursor: pointer;
  transition-duration: 0.4s;
  outline: none;
  display: grid;
  place-content: center;
}
.button:hover {
  scale: 1.025;
}
</style>
