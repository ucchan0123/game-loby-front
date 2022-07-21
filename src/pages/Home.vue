<template>
  <layout-auth>
    <table class="table-auto">
      <thead>
        <tr>
          <th class="px-4 py-2">ユーザー</th>
          <th class="px-4 py-2">オンライン状況</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td class="border px-4 py-2">{{ user.email }}</td>
          <td v-if="user.last_accessed_at == 'オンライン'" class="border px-4 py-2 font-bold text-green-500">●{{ user.last_accessed_at }}</td>
          <td v-else class="border px-4 py-2">{{ user.last_accessed_at }}</td>
        </tr>
      </tbody>
    </table>
  </layout-auth>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

import LayoutAuth from '@/layouts/Auth.vue'
import { axios, ApiResponse } from '@/plugins/axios'
import Echo from 'laravel-echo'
import dayjs from 'dayjs'

declare global {
  interface Window {
    Pusher: any;
    Echo: any;
  }
}
window.Pusher = require('pusher-js')
window.Echo = new Echo({
  broadcaster: 'pusher',
  app_id: '1385516',
  key: '6f35bc3ba3be06fdc94b',
  cluster: 'ap3',
  secret: 'bdd2bacd73b40bc8e4c5',
  wsHost: 'game-loby.com',
  wssPort: 80,
  // wsPort: 80,
  // forceTLS: false,
  disableStats: true,
})

export default defineComponent({
  components: { LayoutAuth },
  setup() {

    const users = ref()

    const getUsers = () => { // 👈 ユーザー情報をAjaxで取得する
      axios.get<ApiResponse<any>>('/users')
        .then(response => {
          users.value = response.data.payload
          users.value.forEach((item:any) => {
            if (dayjs(item.last_accessed_at) > dayjs(new Date()).subtract(15, 'm')){
              item.last_accessed_at = 'オンライン'
            } else {
              item.last_accessed_at = 'オフライン'
            }
              
          })
        })
    }

    window.Echo.channel('online_users')
      .listen('UserAccessed', (e:any) => {
        getUsers() // 👈 リアルタイム通知があれば自動更新
      })

    onMounted(() => {
      getUsers()
    })

    return {
      users
    }
  },
})
</script>
