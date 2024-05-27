<script setup lang="ts">
import { closeModal, modalVisible, slotTarget } from '@/composables/modal'
</script>
<template>
  <Teleport to="#modal">
    <Transition name="t-modal">
      <dialog v-if="modalVisible" class="modal" open>
        <span class="modal__close" @click="closeModal($event)">&times;</span>
        <component :is="slotTarget" />
      </dialog>
    </Transition>
  </Teleport>
</template>
<style scoped>
.modal {
  position: fixed;
  inset: 0;
  margin: auto;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: var(--pure-white);
  box-shadow: 0 0 0.5rem var(--semi-transparent-dark);
}
.modal::backdrop {
  content: '';
  background-color: var(--semi-transparent-dark);
}
.modal:focus,
.modal:focus-within,
.modal:active,
.modal:focus-visible {
  outline: none;
}
.modal__close {
  position: absolute;
  top: -2rem;
  right: -2rem;
  font-size: 2rem;
  font-weight: 900;
  width: 3rem;
  height: 3rem;
  display: grid;
  place-items: center;
  cursor: pointer;
  color: var(--rose-pompadur);
  outline: none;
  border-radius: 5rem;
  border: 0.125rem solid var(--rose-pompadur);
  background-color: var(--pure-white);
}

.t-modal-enter-active {
  transition:
    opacity 0.5s ease-in-out 0.2s,
    transform 0.5s ease-out;
}
.t-modal-leave-active {
  transition:
    opacity 0.5s ease-in-out,
    transform 1s ease-out;
}
.t-modal-enter-from,
.t-modal-leave-to {
  opacity: 0;
  transform: translateY(100vh);
}
.t-modal-enter-to,
.t-modal-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
