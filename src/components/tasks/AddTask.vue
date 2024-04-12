<script setup lang="ts">
import { TASK_TYPE } from '@/constants/task'
import PlusIcon from '../icons/PlusIcon.vue'
import { drop } from '@/utils/dragAndDrop'
import { useTasksStore } from '@/stores/tasks'
defineProps<{
  title: keyof typeof TASK_TYPE
}>()
</script>
<template>
  <article
    class="add-task"
    @dragover.prevent
    @drop.prevent="drop({ ev: $event, title: title })"
    @click="useTasksStore().addTask(title)"
  >
    <PlusIcon class="add-task__icon"></PlusIcon>
  </article>
</template>

<style scoped>
.add-task {
  display: grid;
  place-items: center;
  margin: 0.5rem 0;
  height: 3rem;
  overflow: hidden;
  border-radius: 0.5rem;
  background-color: var(--color-white);
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  border: 0.125rem dashed var(--semi-transparent);
  cursor: pointer;
}
.add-task__icon {
  width: 2rem;
  height: 2rem;
}
</style>
