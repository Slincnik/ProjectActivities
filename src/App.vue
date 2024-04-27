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
  <AppLayout>
    <div v-if="!isRouterReady" class="flex justify-center items-center h-full">
      <Spinner size="36" />
    </div>
    <router-view v-else />
  </AppLayout>
</template>
