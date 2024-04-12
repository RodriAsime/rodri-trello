<script setup lang="ts">
import { TASK_PRIORITY } from '@/constants/task'
import type { Priority } from '@/interfaces/task'
import SelectorComponent from '@/components/common/SelectorComponent.vue'

defineProps<{
  priority: Priority
}>()

defineEmits(['updatePriority'])
</script>
<template>
  <SelectorComponent>
    <template #actual>
      {{ priority }}
    </template>
    <template #item>
      <span
        v-for="priorityItem in TASK_PRIORITY"
        :key="priorityItem"
        class="priority-list"
        @click="$emit('updatePriority', priorityItem)"
      >
        {{ priorityItem }}
      </span>
    </template>
  </SelectorComponent>
</template>

<style scoped>
.priority-list {
  padding: 0.5rem;
  transition: color 0.2s ease;
  text-transform: capitalize;
  &:hover {
    color: var(--rose-pompadur);
  }
}
.priority-list:not(:last-child) {
  border-bottom: 0.0625rem solid var(--semi-transparent-dark);
}
</style>
