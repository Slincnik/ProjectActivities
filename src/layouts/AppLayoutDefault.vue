<template>
  <header class="bg-white dark:bg-black pt-5 mb-10">
    <div class="container">
      <div class="flex items-center justify-between">
        <div class="flex flex-col">
          <div class="flex">
            <RouterLink to="/" class="mr-4 inline-flex items-center gap-2">
              <img class="h-8 w-auto" :src="logoIcon" alt="Logo" />
              <span
                class="max-sm:sr-only xl:text-3xl lg:text-2xl md:text-xl sm:text-xl transition-all ease-linear"
              >
                Table Quest
              </span>
            </RouterLink>
            <ToggleTheme />
          </div>
          <p class="mt-3 xl:text-xl lg:text-base md:text-base text-wrap transition-all ease-linear">
            Настольные игры для всех!
          </p>
        </div>
        <div>
          <Button as-child>
            <RouterLink to="/login">Войти</RouterLink>
          </Button>
        </div>
      </div>
    </div>
  </header>
  <main>
    <slot />
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDark } from '@vueuse/core'
import { Button } from '@/components/ui/button'
import ToggleTheme from '@/components/toggleTheme/ToggleTheme.vue'
import darkLogo from '@/assets/img/logo/darkLogo.svg'
import whiteLogo from '@/assets/img/logo/logo.svg'

const isDark = useDark()

const logoIcon = computed(() => (isDark.value ? darkLogo : whiteLogo))
</script>
