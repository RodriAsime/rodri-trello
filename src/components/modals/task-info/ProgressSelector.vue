<script setup lang="ts">
import SelectorComponent from '@/components/common/SelectorComponent.vue'
import { TASK_TYPE } from '@/constants/task'

defineProps<{
  progress: keyof typeof TASK_TYPE
}>()
</script>
<template>
  <SelectorComponent>
    <template #actual> {{ TASK_TYPE[progress] }}</template>
    <template #item>
      <span
        v-for="(itemType, index) in TASK_TYPE"
        :key="itemType"
        class="types-list"
        @click="$emit('updateStatus', index)"
      >
        {{ itemType }}
      </span>
    </template>
  </SelectorComponent>
</template>

<style scoped>
.types-list {
  padding: 0.5rem;
  transition: color 0.2s ease;
  text-transform: capitalize;
  &:hover {
    color: var(--rose-pompadur);
  }
}
.types-list:not(:last-child) {
  border-bottom: 0.0625rem solid var(--semi-transparent-dark);
}
</style>
