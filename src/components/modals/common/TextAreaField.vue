<script setup lang="ts">
import { defineModel } from 'vue'

withDefaults(
  defineProps<{
    ariaLabel?: string
    placeholder: string
  }>(),
  {
    placeholder: ''
  }
)

const textareaValue = defineModel<string>({ required: true })
</script>
<template>
  <textarea class="main-textarea" v-model="textareaValue" :placeholder="placeholder"></textarea>
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
