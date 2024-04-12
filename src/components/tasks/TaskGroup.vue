<script setup lang="ts">
import AddTask from './AddTask.vue'
import { TASK_TYPE } from '@/constants/task'
import { drop } from '@/utils/dragAndDrop'
defineProps<{
  title: keyof typeof TASK_TYPE
}>()
</script>
<template>
  <section class="task-group" @dragover.prevent @drop.prevent="drop({ ev: $event, title: title })">
    <header class="task-group__header">
      <h2 class="task-group__title"><slot name="title" /></h2>
      <span class="task-group__options"></span>
    </header>
    <section class="task-group__tasks">
      <slot name="task-space" />
    </section>
    <AddTask :title></AddTask>
  </section>
</template>

<style scoped>
.task-group {
  display: block;
  margin: 1rem 0;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: var(--light-gray);
  box-shadow: 0 0 0.5rem var(--semi-transparent);
  height: fit-content;
  width: 15rem;
}
.task-group__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.task-group__title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 800;
  text-transform: capitalize;
}
.task-group__options {
  display: flex;
  gap: 0.5rem;
}
.task-group__tasks {
  margin-bottom: 1rem;
}
</style>
