import type { DropEventData, ID } from '@/interfaces/task'
import { useTasksStore } from '@/stores/tasks'

export function drag(ev: DragEvent) {
  if (!(ev.target instanceof HTMLElement)) return
  ev.dataTransfer?.setData('item', ev.target.dataset.text || '')
}

export function drop({ title, ev }: DropEventData) {
  if (!ev.dataTransfer || !(ev.target instanceof HTMLElement)) return
  const data = ev.dataTransfer.getData('item') as ID
  const parent = ev.target.closest('.task-group')
  if (parent && data) {
    useTasksStore().updateTaskStatus(data, title)
  }
}
