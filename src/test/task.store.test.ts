import type { Task } from '@/interfaces/task'
import { test, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useTasksStore } from '@/stores/tasks'

beforeEach(() => {
  setActivePinia(createPinia())
})

test('Add a new task', () => {
  const { addTask, getTaskIndexById } = useTasksStore()

  const mockValue = '111-222-333-444-555'
  const spy = vi.spyOn(crypto, 'randomUUID').mockReturnValue(mockValue)
  const task: Omit<Task, 'id'> = {
    name: 'New Task',
    description: 'Description',
    status: 'todo',
    type: 'task',
    priority: 'low'
  }

  addTask(task)

  expect(spy).toHaveBeenCalledTimes(1)
  expect(getTaskIndexById(mockValue)).toBeDefined()
})
