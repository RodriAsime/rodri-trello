import type { DirectiveBinding } from 'vue'
import type { CustomHTMLElement } from '@/interfaces/directive'

const handler = (e: MouseEvent, el: HTMLElement, binding?: DirectiveBinding) => {
  if (!el.contains(e.target as Node) && binding?.value) {
    binding.value()
  }
}

export const outsiteClick = {
  mounted(el: CustomHTMLElement, binding: DirectiveBinding) {
    const eventHandler = (e: MouseEvent) => handler(e, el, binding)
    el.__vueOutsideClickHandler__ = eventHandler
    document.addEventListener('click', eventHandler)
  },
  beforeUnmount(el: CustomHTMLElement) {
    const eventHandler = el.__vueOutsideClickHandler__
    if (eventHandler) {
      document.removeEventListener('click', eventHandler)
      delete el.__vueOutsideClickHandler__
    }
  }
}
