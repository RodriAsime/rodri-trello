import { TASK_TYPE } from '@/constants/task'

export interface Task {
  id: number
  name: string
  description: string
  status: keyof typeof TASK_TYPE
  commets?: string[]
  createdAt?: Date
  updatedAt?: Date
  finish?: Date
  type: TaskType
  priority: Priority
}

export type Priority = 'low' | 'medium' | 'high'
export type TaskType = 'task' | 'bug' | 'documentation'

export type DropEventData = {
  title: keyof typeof TASK_TYPE
  ev: DragEvent
}
