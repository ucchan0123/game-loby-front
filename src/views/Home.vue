<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloI18n msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloI18n from '@/components/HelloI18n.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloI18n,
  },
});
</script>
