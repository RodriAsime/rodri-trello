<script setup lang="ts">
import type { Component } from 'vue'
import type { TaskType } from '@/interfaces/task'
import BugIcon from '../icons/BugIcon.vue'
import DocumentationIcon from '../icons/DocumentationIcon.vue'
import TaskIcon from '../icons/TaskIcon.vue'

defineProps<{
  type: TaskType
}>()

const TASK_TYPE_ICON: Record<TaskType, Component> = {
  bug: BugIcon,
  documentation: DocumentationIcon,
  task: TaskIcon
}
</script>
<template>
  <div class="type-icon">
    <Component :is="TASK_TYPE_ICON[type]" />
  </div>
</template>

<style scoped>
.type-icon {
  display: grid;
  place-items: center;
  width: 0.875rem;
  height: 0.875rem;
  border-radius: 0.5rem;
  background-color: var(--light-gray);
  align-self: flex-start;
}
</style>
