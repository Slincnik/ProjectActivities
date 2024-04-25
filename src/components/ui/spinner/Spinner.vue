<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    :class="cn('animate-spin', props.class)"
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'

interface Props {
  size?: string
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: '24'
})
</script>
