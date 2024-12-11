import { test, expect, afterEach } from 'vitest'
import type { Task } from '@/interfaces/task'
import { useModal } from '../modal'

const exampleTask: Task = {
  description: 'Description Example',
  id: '7c665a39-ab0c-4689-a05e-b8b88e8eb9c2',
  name: 'Name Example',
  priority: 'high',
  status: 'test',
  type: 'task'
}

function simulateDOM() {
  const modalContainer = document.createElement('div')
  modalContainer.id = 'modal'
  modalContainer.innerHTML = `<div class="modal"></div>`
  document.body.appendChild(modalContainer)
}

afterEach(() => {
  modalVisible.value = false
  selectedTask.value = null
  slotTarget.value = null
})

const { closeModal, modalVisible, openEntryModal, openInfoModal, selectedTask, slotTarget } =
  useModal()

test('Check the operation of openInfoModal', () => {
  expect(modalVisible.value).toMatchInlineSnapshot(`false`)
  expect(selectedTask.value).toBeNull()
  expect(slotTarget.value).toBeNull()

  simulateDOM()
  openInfoModal(exampleTask)

  expect(modalVisible.value).toMatchInlineSnapshot(`true`)
  expect(selectedTask.value).toStrictEqual(exampleTask)
  expect(slotTarget.value).toMatchInlineSnapshot(`
    {
      "__asyncLoader": [Function],
      "__asyncResolved": undefined,
      "name": "AsyncComponentWrapper",
      "setup": [Function],
    }
  `)
})

test('Check the operation of openEntryModal', () => {
  expect(modalVisible.value).toMatchInlineSnapshot(`false`)
  expect(slotTarget.value).toBeNull()

  openEntryModal()

  expect(modalVisible.value).toMatchInlineSnapshot(`true`)
  expect(slotTarget.value).toMatchInlineSnapshot(`
    {
      "__asyncLoader": [Function],
      "__asyncResolved": undefined,
      "name": "AsyncComponentWrapper",
      "setup": [Function],
    }
  `)
})

test('Simulate a button for click and execute closeModal', () => {
  expect(slotTarget.value).toBeNull()

  openEntryModal()

  expect(slotTarget.value).toMatchInlineSnapshot(`
    {
      "__asyncLoader": [Function],
      "__asyncResolved": undefined,
      "name": "AsyncComponentWrapper",
      "setup": [Function],
    }
  `)

  const simulateButton = document.createElement('button')
  document.body.appendChild(simulateButton)

  const event = new MouseEvent('click')

  Object.defineProperty(event, 'target', { value: simulateButton })

  closeModal(event)

  expect(slotTarget.value).toBeNull()
})
