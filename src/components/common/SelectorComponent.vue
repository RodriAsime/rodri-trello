<script setup lang="ts">
import { ref } from 'vue'

const listVisible = ref(false)

const openList = () => {
  listVisible.value = !listVisible.value
}
const closeList = () => {
  listVisible.value = false
}
</script>
<template>
  <div v-outsite-click="closeList" class="selector" @click="openList">
    <span class="selector__actual"><slot name="actual" /></span>
    <Transition name="list">
      <div v-if="listVisible" class="selector__list">
        <span class="selector__item">
          <slot name="item" />
        </span>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.selector {
  display: grid;
  box-shadow: 0 0 0.1rem 0.1rem var(--semi-transparent-dark);
  position: relative;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 0.3rem;
  min-width: 7rem;
}
.selector__actual {
  display: block;
  border-radius: 2rem;
  text-transform: capitalize;
}
.selector__list {
  display: grid;
  border-radius: 0.3rem;
  position: absolute;
  top: 0;
  width: 100%;
  background-color: var(--pure-white);
  box-shadow: 0 0 0.1rem 0.1rem var(--semi-transparent-dark);
}
.selector__item {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.list-enter-active,
.list-leave-active {
  transition: grid-template-rows 0.3s;
}
.list-enter-from,
.list-leave-to {
  grid-template-rows: 0fr;
}
.list-enter-to,
.list-leave-from {
  grid-template-rows: 1fr;
}
</style>
