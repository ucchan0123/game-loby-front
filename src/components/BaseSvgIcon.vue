<template>
  <svg
    :width="24"
    :height="24"
    viewBox="0 0 24 24"
  >
    <path :d="path" />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    path: {
      type: String,
      'default': () => (''),
      required: true,
    }
  },
})
</script>

<style scoped>
svg {
	transform: rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1));
}
path {
	fill: currentColor;
}
</style>
