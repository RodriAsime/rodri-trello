<script setup lang="ts">
import { defineModel } from 'vue'
defineProps({
  ariaLabel: { type: String, required: true },
  placeholder: { type: String, required: false, default: '' },
  type: { type: String, required: false, default: 'text' }
})

const textareaValue = defineModel({ required: true })
</script>
<template>
  <textarea
    class="main-textarea"
    :type="type"
    v-model="textareaValue"
    :placeholder="placeholder"
  ></textarea>
</template>

<style scoped>
.main-textarea {
  font-size: 1.25rem;
  margin: 0;
  border: none;
  background-color: transparent;
  width: 100%;
  text-align: center;
  position: relative;
  border-bottom: 0.1rem solid var(--semi-transparent-dark);
  outline: none;
  resize: none;
  height: 5rem;
}
</style>
