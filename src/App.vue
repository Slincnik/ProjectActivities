<script setup lang="ts">
import { ref } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import { Spinner } from '@/components/ui/spinner'
import AppLayout from '@/layouts/AppLayout.vue'

const isRouterReady = ref(false)
const router = useRouter()

router.isReady().finally(() => (isRouterReady.value = true))
</script>

<template>
  <div v-if="!isRouterReady" class="flex justify-center items-center h-dvh">
    <Spinner size="36" />
  </div>
  <AppLayout v-else>
    <router-view />
  </AppLayout>
</template>
