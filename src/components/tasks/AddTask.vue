<script setup lang="ts">
import { TASK_TYPE } from '@/constants/task'
import PlusIcon from '../icons/PlusIcon.vue'
import { drop } from '@/utils/dragAndDrop'
import { useModal } from '@/composables/modal'
defineProps<{
  title: keyof typeof TASK_TYPE
}>()

const { openEntryModal } = useModal()
</script>
<template>
  <article
    class="add-task"
    @dragover.prevent
    @drop.prevent="drop({ ev: $event, title: title })"
    @click="openEntryModal"
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
  box-shadow: 0 0 0.5rem var(--semi-transparent);
  border: 0.125rem dashed var(--semi-transparent);
  cursor: pointer;
}
.add-task__icon {
  width: 2rem;
  height: 2rem;
}
</style>
