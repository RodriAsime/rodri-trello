<script setup lang="ts">
import { defineModel } from 'vue'

withDefaults(
  defineProps<{
    ariaLabel?: string
    placeholder: string
    type?: string
  }>(),
  {
    placeholder: '',
    type: 'text'
  }
)

const inputValue = defineModel<string>({ required: true })
</script>
<template>
  <input class="main-input" :type="type" v-model="inputValue" :placeholder="placeholder" />
</template>

<style scoped>
.main-input {
  font-size: 1.25rem;
  margin: 0;
  font-weight: 500;
  border: none;
  background-color: transparent;
  width: 100%;
  text-align: center;
  position: relative;
  border-bottom: 0.1rem solid var(--semi-transparent-dark);
  outline: none;
}
</style>
