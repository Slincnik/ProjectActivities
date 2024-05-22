<template>
  <header class="bg-white dark:bg-black pt-5 mb-10">
    <div class="mx-auto flex items-center justify-center p-5 lg:px-8" aria-label="Global">
      <div class="flex items-center">
        <RouterLink to="/" class="pr-1.5 inline-flex items-center gap-2">
          <img class="h-8 w-auto" :src="logoIcon" alt="Logo" />
          <span class="text-5xl">Table Quest</span>
        </RouterLink>
        <ToggleTheme />
      </div>
    </div>
  </header>
  <main><slot /></main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useDark } from '@vueuse/core'
import { computed } from 'vue'
import ToggleTheme from '@/components/toggleTheme/ToggleTheme.vue'

const isDark = useDark()

const logoIcon = computed(() =>
  isDark.value ? '/src/assets/img/logo/darkLogo.svg' : '/src/assets/img/logo/logo.svg'
)
</script>

