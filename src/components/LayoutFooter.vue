<template>
  <section class="block fixed inset-x-0 bottom-0 z-10 bg-gray-900 text-white shadow">
    <div class="flex justify-between">
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mdiEmail, mdiCog } from '@mdi/js'
import BaseSvgIcon from '@/components/BaseSvgIcon.vue'

export default defineComponent({
  components: { },
  setup() {
    return {
      mdiEmail,
      mdiCog,
    }
  },
})
</script>
