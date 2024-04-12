import { ref, nextTick, defineAsyncComponent, shallowRef } from 'vue'
import type { Component } from 'vue'
import type { Task } from '@/interfaces/task'

const TaskInfo = defineAsyncComponent(() => import('@/components/modals/TaskInfo.vue'))

export const modalVisible = ref(false)
export const selectedTask = ref<Task | null>(null)
export const slotTarget = shallowRef<Component | null>(null)

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

export function openInfoModal(props: Task) {
  selectedTask.value = props
  slotTarget.value = TaskInfo
  toogleModal()
}

export function closeModal(event: MouseEvent) {
  if (!(event.target instanceof HTMLElement)) return
  toogleModal()
  slotTarget.value = null
}
