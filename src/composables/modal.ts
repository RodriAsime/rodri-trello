import { ref, nextTick, defineAsyncComponent, shallowRef } from 'vue'
import type { Component } from 'vue'
import type { Task } from '@/interfaces/task'

const TaskInfo = defineAsyncComponent(() => import('@/components/modals/TaskInfo.vue'))
const TaskEntry = defineAsyncComponent(() => import('@/components/modals/TaskEntry.vue'))

const modalVisible = ref(false)
const selectedTask = ref<Task | null>(null)
const slotTarget = shallowRef<Component | null>(null)

async function toogleModal() {
  const teleportModal = document.getElementById('modal')
  if (!(teleportModal instanceof HTMLElement)) return
  const modal = teleportModal.querySelector('.modal')
  if (!(modal instanceof HTMLDialogElement)) {
    modalVisible.value = true
    await nextTick()
  } else {
    modalVisible.value = false
    selectedTask.value = null
  }
}

export function useModal() {
  function openInfoModal(props: Task) {
    selectedTask.value = props
    slotTarget.value = TaskInfo
    toogleModal()
  }

  function openEntryModal() {
    slotTarget.value = TaskEntry
    toogleModal()
  }
  function closeModal(event: MouseEvent) {
    if (!(event.target instanceof HTMLElement)) return
    toogleModal()
    slotTarget.value = null
  }

  return {
    modalVisible,
    selectedTask,
    slotTarget,
    openInfoModal,
    closeModal,
    openEntryModal
  }
}
