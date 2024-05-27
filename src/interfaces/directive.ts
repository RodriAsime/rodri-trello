export interface CustomHTMLElement extends HTMLElement {
  __vueOutsideClickHandler__?: (e: MouseEvent) => void
}
