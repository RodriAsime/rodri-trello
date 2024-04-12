<script setup lang="ts">
import type { Task } from '@/interfaces/task'
import { drag } from '@/utils/dragAndDrop'
import { openInfoModal } from '@/composables/modal'
import { useTasksStore } from '@/stores/tasks'
import TypeTaskIcon from './TypeTaskIcon.vue'
import TaskPriority from './TaskPriority.vue'

defineProps<{
  id: number
  task: Task
}>()
</script>
<template>
  <article
    class="task-item"
    draggable="true"
    :data-text="id"
    @dragstart="drag"
    @dragend="useTasksStore().orderTasks($event, $el)"
    @click="openInfoModal($props.task)"
  >
    <header class="task-item__header">
      <h3 class="task-item__title"><slot name="name" /><TypeTaskIcon :type="task.type" /></h3>
      <span class="task-item__options"><TaskPriority :priority="task.priority" /></span>
    </header>
    <section class="task-item__content">
      <article class="task-item__description">
        <slot name="description" />
      </article>
    </section>
    <footer class="task-item__footer"></footer>
  </article>
</template>

<style scoped>
.task-item {
  display: block;
  margin: 0.5rem 0;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: var(--color-white);
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  &:hover {
    cursor: pointer;
  }
}
.task-item__header {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  gap: 0.5rem;
}
.task-item__title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 500;
  display: flex;
  gap: 0.25rem;
  align-items: center;
}
.task-item__options {
  display: flex;
  gap: 0.5rem;
}
.task-item__content {
  margin-bottom: 1rem;
}
.task-item__description {
  font-size: 0.875rem;
  font-weight: 200;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  width: 100%;
}
.task-item__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
