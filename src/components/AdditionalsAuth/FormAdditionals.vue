<template>
  <div class="border bg-card text-card-foreground shadow-sm mt-2 w-[350px] h-auto p-2 rounded-lg">
    <p class="text-base text-center leading-relaxed">
      {{ text }}
      <RouterLink :to="{ name: RouterNames[name] }" class="text-blue-400">{{
        linkText
      }}</RouterLink>
    </p>
  </div>
</template>

<script setup lang="ts">
import { RouterNames } from '@/layouts/layouts.types'
defineProps<{
  name: keyof typeof RouterNames
  linkText: string
  text: string
}>()
</script>

