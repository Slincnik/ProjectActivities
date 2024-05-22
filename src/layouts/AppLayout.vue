<template>
  <div v-if="!isRouterReady" class="flex justify-center items-center h-dvh">
    <Spinner size="36" />
  </div>
  <template v-else>
    <component :is="route.meta.layoutComponent">
      <slot />
    </component>
    <footer>
      <div class="container border-t mt-4 dark:border-white border-black max-w-[1100px] mx-auto">
        <p class="text-center py-[10px] footer_desc">Copyright © 2024</p>
      </div>
    </footer>
  </template>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Spinner } from '@/components/ui/spinner'

const isRouterReady = ref(false)

const route = useRoute()
const router = useRouter()

router.isReady().finally(() => (isRouterReady.value = true))
</script>

<style scoped>
.footer_desc {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  line-height: 22.4px;
}
</style>
