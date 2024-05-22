<script setup lang="ts">
import { ref } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import { useDark } from '@vueuse/core'
import { Toaster } from 'vue-sonner'
import { Spinner } from '@/components/ui/spinner'
import AppLayout from '@/layouts/AppLayout.vue'

const isRouterReady = ref(false)
const router = useRouter()

const isDark = useDark()

router.isReady().finally(() => (isRouterReady.value = true))
</script>

<template>
  <div v-if="!isRouterReady" class="flex justify-center items-center h-dvh">
    <Spinner size="36" />
  </div>
  <AppLayout v-else>
    <Toaster rich-colors position="bottom-right" :theme="isDark ? 'dark' : 'light'" />
    <router-view />
  </AppLayout>
</template>
