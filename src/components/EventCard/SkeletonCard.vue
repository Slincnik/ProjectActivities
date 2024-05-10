<template>
  <div class="flex flex-col space-y-3">
    <Skeleton class="h-[150px] w-[300px] rounded-lg" />
    <div class="space-y-2">
      <Skeleton class="h-4 w-[200px]" />
      <div class="flex flex-row">
        <Skeleton class="h-4 w-[50px] mr-5" />
        <Skeleton class="h-4 w-[50px]" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Skeleton } from '@/components/ui/skeleton'
</script>

