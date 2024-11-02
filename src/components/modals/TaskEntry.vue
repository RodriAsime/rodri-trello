<script setup lang="ts">
import { useModal } from '@/composables/modal'
import type { Task } from '@/interfaces/task'
import { useTasksStore } from '@/stores/tasks'
import { TASK_PRIORITY, TASK_TYPE } from '@/constants/task'
import { ref, shallowReactive } from 'vue'
import InputField from './common/InputField.vue'
import TextAreaField from './common/TextAreaField.vue'
import ProgressSelector from './task-info/ProgressSelector.vue'
import PrioritySelector from './task-info/PrioritySelector.vue'
import MainButton from '../common/MainButton.vue'

const { modalVisible } = useModal()

const { addTask } = useTasksStore()

const form = ref<HTMLFormElement | null>(null)
const newTask = shallowReactive<Omit<Task, 'id'>>({
  name: '',
  description: '',
  status: 'todo',
  type: 'task',
  priority: 'low'
})

const updatePriority = (priority: keyof typeof TASK_PRIORITY) => {
  newTask.priority = priority
}

const updateStatus = (status: keyof typeof TASK_TYPE) => {
  newTask.status = status
}

const resetForm = () => {
  newTask.name = ''
  newTask.description = ''
  newTask.status = 'todo'
  newTask.priority = 'low'
}

const addNewTask = () => {
  if (!form.value?.checkValidity()) return
  addTask(newTask)
  resetForm()
  modalVisible.value = false
}
</script>
<template>
  <form v-if="modalVisible" class="task-info" ref="form" @submit.prevent>
    <header class="task-info__header">
      <InputField v-model="newTask.name" placeholder="Nombre de la tarea" />
      <span class="task-info__options"></span>
    </header>
    <div class="task-info__content">
      <TextAreaField
        v-model="newTask.description"
        placeholder="Descripción de la tarea"
      ></TextAreaField>
    </div>
    <div class="task-info__selectors">
      <ProgressSelector :progress="newTask.status" @update-status="updateStatus"></ProgressSelector>
      <PrioritySelector :priority="newTask.priority" @update-priority="updatePriority" />
    </div>
    <footer class="task-info__footer">
      <MainButton @click="addNewTask">Guardar</MainButton>
    </footer>
  </form>
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

.task-info__options {
  display: flex;
  gap: 0.5rem;
}
.task-info__content {
  margin-bottom: 1rem;
}
.task-info__selectors {
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
.task-info__footer {
  margin: 0.5rem 0 0;
  display: flex;
  justify-content: center;
}
</style>
