<template>
  <div class="flex justify-center">
    <div class="w-full sm:max-w-lg py-4 px-3">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted} from 'vue'

import { axios } from '@/plugins/axios'

export default defineComponent({
  setup() {
    onMounted(() => {
      axios.get('/sanctum/csrf-cookie')
        .then((res) => {
          console.log(res)
        })
        .catch((error) => {
          console.log(error)
        })
    })
  },
})
</script>
