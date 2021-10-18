<template>
  <layout-guest>
    <h1 class="text-xl font-bold mb-6">ページが見つかりませんでした。</h1>
    <router-link
      to="/home"
      class="bg-yellow-300 hover:bg-yellow-400 text-gray-700 font-bold py-2 px-4 rounded disabled:opacity-75"
    >
      ホームへ移動する
    </router-link>
  </layout-guest>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import LayoutGuest from '@/layouts/Guest.vue'

export default defineComponent({
  components: { LayoutGuest }
})
</script>
