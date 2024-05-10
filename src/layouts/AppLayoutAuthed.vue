<template>
  <header class="bg-white dark:bg-black pt-5 mb-10 px-2">
    <div class="flex flex-row justify-around mx-auto">
      <div class="flex items-center mr-5">
        <div class="flex items-center lg:flex-1">
          <RouterLink to="/" class="pr-1.5 inline-flex items-center gap-2">
            <img class="h-8 w-auto max-w-8" :src="logoIcon" alt="Logo" />
            <span
              class="max-sm:hidden xl:text-3xl lg:text-2xl md:text-xl sm:text-base text-center transition-all ease-linear"
            >
              Table Quest
            </span>
          </RouterLink>
          <ToggleTheme />
        </div>
      </div>
      <nav>
        <ul class="flex flex-wrap">
          <RouterLink
            v-for="page in navbarPages"
            :key="page.key"
            :to="{ name: page.name }"
            active-class="dark:!text-white !text-black"
            class="dark:text-gray-500 text-gray-400 mr-10 text-wrap last:mr-0 max-sm:text-xl xl:text-3xl lg:text-2xl md:text-xl sm:text-xl transition-all ease-linear"
          >
            {{ RouteNames[page.key] }}
          </RouterLink>
        </ul>
      </nav>
    </div>
  </header>
  <main>
    <slot />
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDark } from '@vueuse/core'

import ToggleTheme from '@/components/toggleTheme/ToggleTheme.vue'
import { RouteNames, RouterNames } from './layouts.types'

const navbarPages = computed<
  {
    name: string
    key: keyof typeof RouteNames
  }[]
>(() => [
  { name: RouterNames.EVENTS, key: 'EVENTS' },
  { name: RouterNames.TRACKED, key: 'TRACKED' },
  { name: RouterNames.PROFILE, key: 'PROFILE' }
])

const isDark = useDark()

const logoIcon = computed(() =>
  isDark.value ? '/src/assets/img/logo/darkLogo.svg' : '/src/assets/img/logo/logo.svg'
)
</script>

