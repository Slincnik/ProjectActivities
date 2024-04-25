<script setup lang="ts">
import { ref } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import { Spinner } from '@/components/ui/spinner'

const isRouterReady = ref(false)
const router = useRouter()

router.isReady().finally(() => (isRouterReady.value = true))
</script>

<template>
  <div v-if="!isRouterReady" class="flex justify-center items-center h-full">
    <Spinner size="36" />
  </div>
  <router-view v-else />
</template>
