<template>
  <component :is="route.meta.layoutComponent">
    <slot />
  </component>
  <footer>
    <div class="container border-t mt-4 dark:border-white border-black max-w-[1100px] mx-auto">
      <p class="text-center py-[10px] footer_desc">Copyright © 2024</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style scoped>
.footer_desc {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  line-height: 22.4px;
}
</style>
