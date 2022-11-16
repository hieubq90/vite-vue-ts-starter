<script setup lang="ts">
function doAlert() {
  alert('aaa')
}
</script>

<template>
  <div class="text-center">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <div class="flex flex-row justify-center">
    <i class="i-others-flash w-8 h-8" />
    <button @click="doAlert">
      <i class="i-others-social-github w-8 h-8" />
      Button
    </button>
    <i class="i-others-social-facebook w-8 h-8" />
    <i class="i-flag-vn-1x1 w-8 h-8" />
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
  bgColor: yellow
</route>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
