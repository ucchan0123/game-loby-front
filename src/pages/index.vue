<template>
  <layout-auth>
    <div class="mb-6">
      <div class="card-outlined p-4">
        <router-link
          to="/terms"
          class="font-bold text-blue-600 hover:underline"
        >
          <h1>利用規約</h1>
        </router-link>
      </div>
    </div>
    <div class="mb-6">
      <div class="card-outlined p-4">
        <div
          class="font-bold text-blue-600 hover:underline cursor-pointer"
          @click="onLogout"
        >
          <h1>ログアウト</h1>
        </div>
      </div>
    </div>
  </layout-auth>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

import LayoutAuth from '@/layouts/Auth.vue'
import { axios } from '@/plugins/axios'

({
  components: { LayoutAuth },
  setup() {
    const router = useRouter()

    const onLogout = () => {
      axios
        .get('/logout')
        .then(() => {
          router.push('/login')
        })
    }

    return {
      onLogout
    }
  },
})
</script>
