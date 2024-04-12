import { defineStore, acceptHMRUpdate } from 'pinia'
import { reactive, computed } from 'vue'
import type { Task } from '@/interfaces/task'
import { TASK_TYPE, TASK_PRIORITY } from '@/constants/task'

export const useTasksStore = defineStore('tasks', () => {
  const tasks = reactive<Task[]>([
    {
      id: 1,
      name: 'Task 1',
      description: 'Description 1',
      status: 'todo',
      type: 'task',
      priority: 'low'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'Description 2',
      status: 'in_progress',
      type: 'bug',
      priority: 'medium'
    },
    {
      id: 3,
      name: 'Task 3',
      description: 'Description 3',
      status: 'test',
      type: 'documentation',
      priority: 'high'
    },
    {
      id: 4,
      name: 'Task 4',
      description: 'Description 4',
      status: 'revision',
      type: 'task',
      priority: 'medium'
    },
    {
      id: 5,
      name: 'Task 5',
      description: 'Description 5',
      status: 'done',
      type: 'bug',
      priority: 'low'
    },
    {
      id: 6,
      name: 'Task 6',
      description: 'Description 6',
      status: 'done',
      type: 'documentation',
      priority: 'high'
    },
    {
      id: 7,
      name: 'Task 7',
      description: 'Description 7',
      status: 'done',
      type: 'task',
      priority: 'low'
    }
  ])

  const getTasks = computed(() => tasks)

  const addTask = (status: keyof typeof TASK_TYPE) => {
    const task: Task = {
      id: tasks.length + 1,
      name: `Task ${tasks.length + 1}`,
      description: `Description ${tasks.length + 1}`,
      status: status,
      type: 'task',
      priority: 'low'
    }
    tasks.push(task)
  }

  const removeTask = (id: number) => {
    const index = tasks.findIndex((task) => task.id === id)
    tasks.splice(index, 1)
  }

  const updateTaskPriority = (id: number, priority: keyof typeof TASK_PRIORITY) => {
    const index = tasks.findIndex((task) => task.id === id)
    tasks[index].priority = priority
  }
  const updateTaskStatus = (id: number, status: keyof typeof TASK_TYPE) => {
    const index = tasks.findIndex((task) => task.id === id)
    tasks[index].status = status
  }

  const updateTask = (task: Task) => {
    const index = tasks.findIndex((t) => t.id === task.id)
    tasks[index] = task
  }

  const getTaskIndexById = (id: number) => tasks.findIndex((task) => task.id === id)

  const moveTaskToPosition = (fromIndex: number, toIndex: number) => {
    const taskToMove = tasks.splice(fromIndex, 1)[0]
    tasks.splice(toIndex, 0, taskToMove)
  }

  const orderTasks = (overTask: DragEvent, dropTask: HTMLElement) => {
    if (!(overTask.target instanceof HTMLElement)) return
    const overId = Number(overTask.target.dataset.text)
    const dropId = Number(dropTask.dataset.text)

    const mouseY = overTask.clientY
    const dropTaskRect = dropTask.getBoundingClientRect()
    const relativeMouseY = mouseY - dropTaskRect.top
    const halfHeight = dropTaskRect.height / 2

    const overIndex = getTaskIndexById(overId)
    const dropIndex = getTaskIndexById(dropId)
    const newPosition = relativeMouseY <= halfHeight ? dropIndex - 2 : dropIndex + 1

    moveTaskToPosition(overIndex, newPosition)
  }

  return {
    tasks,
    getTasks,
    addTask,
    removeTask,
    updateTask,
    updateTaskStatus,
    updateTaskPriority,
    orderTasks
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTasksStore, import.meta.hot))
}
