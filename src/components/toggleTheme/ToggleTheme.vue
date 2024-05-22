<script setup lang="ts">
import { computed } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import { Moon, Sun } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

const isDark = useDark()
const toggleDark = useToggle(isDark)

type SVGProps = {
  size?: 24 | number
  strokeWidth?: number | string
  absoluteStrokeWidth?: boolean
}

const props = defineProps<SVGProps>()

const themeIcon = computed(() => (isDark.value ? Moon : Sun))
</script>

<template>
  <Button variant="ghost" class="self-end" size="icon" @click="toggleDark()">
    <themeIcon v-bind="props" :size="36" />
  </Button>
</template>

