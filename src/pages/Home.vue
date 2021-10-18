<template>
  <layout-auth>
    test
  </layout-auth>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

import LayoutAuth from '@/layouts/Auth.vue'
import { axios } from '@/plugins/axios'

export default defineComponent({
  components: { LayoutAuth },
  setup() {

    onMounted(() => {
      const getUser = axios.get('/user')
      Promise.all([getUser])
        .then(response => {
          console.log(response[0].data)
        })
    })

    return {
    }
  },
})
</script>
