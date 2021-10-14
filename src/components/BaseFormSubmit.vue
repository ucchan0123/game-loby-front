<template>
  <button
    type="submit"
    :disabled="disabled"
    :class="`${color} font-bold py-2 px-4 rounded disabled:opacity-75`"
  >
    <div class="flex">
      <base-svg-icon v-if="disabled" class="animate-spin mr-1 p-0.5" :path="mdiLoading" />
      <div>
        {{ text }}
      </div>
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import BaseSvgIcon from '@/components/BaseSvgIcon.vue'
import { mdiLoading } from '@mdi/js'

export default defineComponent({
  components: { BaseSvgIcon },
  props: {
    disabled: {
      type: Boolean,
      'default': () => (false),
      required: true,
    },
    text: {
      type: String,
      'default': () => ('送信'),
    },
    color: {
      type: String,
      'default': () => ('bg-yellow-300 hover:bg-yellow-400 text-gray-700'),
    },
  },
  setup() {
    return {
      mdiLoading,
    }
  },
})
</script>
