<template>
  <section class="block fixed inset-x-0 bottom-0 z-10 bg-gray-900 text-white shadow">
    <div class="flex justify-between">
      <router-link
        to="/contact" 
        class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1 border-r"
      >
        <base-svg-icon class="inline-block mb-1" :path="mdiEmail"></base-svg-icon>
        <span class="tab tab-home block text-xs">お問い合わせ</span>
      </router-link>
      <router-link
        to="/account"
        class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1 border-l"
      >
        <base-svg-icon class="inline-block mb-1" :path="mdiCog" />
        <span class="tab tab-home block text-xs">設定</span>
      </router-link>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mdiEmail, mdiCog } from '@mdi/js'
import BaseSvgIcon from '@/components/BaseSvgIcon.vue'

export default defineComponent({
  components: { BaseSvgIcon },
  setup() {
    return {
      mdiEmail,
      mdiCog,
    }
  },
})
</script>
