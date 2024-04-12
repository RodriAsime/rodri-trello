<script setup lang="ts">
import TaskGroup from '../tasks/TaskGroup.vue'
import TaskItem from '../tasks/TaskItem.vue'
import { useTasksStore } from '@/stores/tasks'
import { TASK_TYPE } from '@/constants/task'

const tasksFilter = (type: keyof typeof TASK_TYPE) => {
  return useTasksStore().getTasks.filter((task) => task.status === type)
}
</script>
<template>
  <main class="dashboard">
    <TaskGroup v-for="(item, key) in TASK_TYPE" :key="key" :title="key">
      <template #title> {{ item }} </template>
      <template #task-space>
        <TaskItem v-for="task in tasksFilter(key)" :key="task.id" :id="task.id" :task>
          <template #name> {{ task.name }} </template>
          <template #type> {{ task.type }} </template>
          <template #description> {{ task.description }} </template>
        </TaskItem>
      </template>
    </TaskGroup>
  </main>
</template>

<style scoped>
.dashboard {
  display: flex;
  flex-flow: row nowrap;
  gap: 2rem;
  padding: 2rem;
}
</style>
