<script setup lang="ts">
import { watch } from 'vue'
import { selectedTask } from '@/composables/modal'
import { useTasksStore } from '@/stores/tasks'
import { TASK_PRIORITY, TASK_TYPE } from '@/constants/task'
import PrioritySelector from './task-info/PrioritySelector.vue'
import ProgressSelector from './task-info/ProgressSelector.vue'

watch(selectedTask, () => {
  if (!selectedTask.value) return
  useTasksStore().updateTask(selectedTask.value)
})

const updatePriority = (priority: keyof typeof TASK_PRIORITY) => {
  if (!selectedTask.value) return
  useTasksStore().updateTaskPriority(selectedTask.value.id, priority)
}

const updateStatus = (status: keyof typeof TASK_TYPE) => {
  if (!selectedTask.value) return
  useTasksStore().updateTaskStatus(selectedTask.value.id, status)
}
</script>
<template>
  <article class="task-info" v-if="selectedTask">
    <header class="task-info__header">
      <input
        class="task-info__title"
        type="text"
        v-model="selectedTask.name"
        placeholder="Nombre de la tarea"
      />
      <span class="task-info__options"></span>
    </header>
    <section class="task-info__content">
      <textarea
        class="task-info__description"
        v-model="selectedTask.description"
        placeholder="Descripción de la tarea"
      ></textarea>
    </section>
    <footer class="task-info__footer">
      <ProgressSelector
        :progress="selectedTask.status"
        @updateStatus="updateStatus"
      ></ProgressSelector>
      <PrioritySelector :priority="selectedTask.priority" @updatePriority="updatePriority" />
    </footer>
  </article>
</template>

<style scoped>
.task-info {
  display: block;
  margin: 0.5rem 0;
  padding: 1rem;
  border-radius: 0.5rem;
}
.task-info__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.task-info__title {
  font-size: 1.5rem;
  margin: 0;
  font-weight: 500;
  border: none;
  background-color: transparent;
  width: 100%;
  text-align: center;
  position: relative;
  border-radius: 0.3rem;
  box-shadow: 0 0 0.1rem 0.1rem var(--semi-transparent-dark);
}
.task-info__options {
  display: flex;
  gap: 0.5rem;
}
.task-info__content {
  margin-bottom: 1rem;
}
.task-info__description {
  font-size: 1rem;
  font-weight: 500;
  border: none;
  background-color: transparent;
  width: 100%;
  position: relative;
  resize: none;
  border-radius: 0.3rem;
  box-shadow: 0 0 0.1rem 0.1rem var(--semi-transparent-dark);
}
.task-info__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.task-info__due-date {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--semi-transparent-dark);
}
.task-info__progress,
.task-info__progress + select {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--semi-transparent-dark);
  border-radius: 0.3rem;
  box-shadow: 0 0 0.1rem 0.1rem var(--semi-transparent-dark);
}
</style>
