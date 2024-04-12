import type { DirectiveBinding } from 'vue'

const handler = (e: MouseEvent, el: HTMLElement, binding?: DirectiveBinding) => {
  if (!el.contains(e.target as Node) && binding?.value) {
    binding.value()
  }
}

export const outsiteClick = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    document.addEventListener('click', (e) => handler(e, el, binding))
  },
  beforeUnmount: (el: HTMLElement) => {
    document.removeEventListener('click', (e) => handler(e, el))
  }
}
