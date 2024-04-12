<script setup lang="ts">
import { computed } from 'vue'
import type { Priority } from '@/interfaces/task'
import { TASK_PRIORITY } from '@/constants/task'

const props = defineProps<{
  priority: Priority
}>()

const priorityClass = computed(() => {
  return {
    'priority-low': props.priority === TASK_PRIORITY.low,
    'priority-medium': props.priority === TASK_PRIORITY.medium,
    'priority-high': props.priority === TASK_PRIORITY.high
  }
})
</script>
<template>
  <span class="priority" :class="priorityClass"></span>
</template>

<style scoped>
.priority {
  display: inline-block;
  width: 3.125rem;
  height: 0.3125rem;
  border-radius: 2rem;
}
.priority-low {
  background-color: limegreen;
}
.priority-medium {
  background-color: orange;
}
.priority-high {
  background-color: crimson;
}
</style>
