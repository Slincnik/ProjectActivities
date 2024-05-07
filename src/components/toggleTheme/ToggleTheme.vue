<script setup lang="ts">
import { computed } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import { Button } from '@/components/ui/button'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const themeIcon = computed(() =>
  isDark.value ? '/src/assets/img/blackTheme.png' : '/src/assets/img/whiteTheme.png'
)
</script>

<template>
  <Button variant="ghost" class="self-end" size="icon" @click="toggleDark()">
    <img :src="themeIcon" class="h-8 w-8" alt="theme" />
  </Button>
</template>

