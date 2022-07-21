<template>
  <div class="grid grid-cols-12">
    <div class="col-span-2">
      <base-svg-icon v-if="backIconDisabled" @click="router.back()" class="cursor-pointer" :path="mdiChevronLeft" />
    </div>
    <div class="col-span-8">
      <router-link to="/home">
        <h1 class="text-center font-bold text-yellow-500">ロビー</h1>
      </router-link>
    </div>
    <div class="col-span-2" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
import { mdiChevronLeft } from '@mdi/js'
import BaseSvgIcon from '@/components/BaseSvgIcon.vue'

export default defineComponent({
  components: { BaseSvgIcon },
  setup() {
    const router = useRouter()
    const route = useRoute()

    const backIconDisabled = ref(true)

    onMounted(() => {
      backIconDisabled.value = !!(route.path !== '/home')
    })

    return {
      backIconDisabled,
      router,
      mdiChevronLeft,
    }
  },
})
</script>
