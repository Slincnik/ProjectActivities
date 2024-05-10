<template>
  <Card class="border-none shadow-none">
    <div class="relative cursor-pointer" ref="hoverCard">
      <div
        :class="{ '!block': isHovered }"
        class="hidden bg-black/80 absolute z-0 top-0 left-0 w-full h-full pt-[50px] text-center"
      >
        <p class="text-4xl w-6/12 mx-auto text-white">Принять участие?</p>
        <Button variant="outline" class="mt-2">Да</Button>
      </div>
      <img :src="card.img" alt="img" class="rounded-lg w-full h-auto max-w-[380px] max-h-[220px]" />
    </div>
    <CardTitle>
      <p class="text-2xl mt-2">{{ card.name }}</p>
    </CardTitle>
    <div class="flex flex-row mt-[10px]">
      <p class="text-base dark:text-gray-300 text-gray-500 mr-5">{{ computedTime }}</p>
      <p class="text-base dark:text-gray-300 text-gray-500 before:content-['•'] before:pr-0.5">
        {{ card.place }}
      </p>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useElementHover } from '@vueuse/core'
import { Card, CardTitle } from '@/components/ui/card'
import { Button } from '../ui/button'
import type { EventCard } from '@/api/events'

const props = defineProps<{
  card: EventCard
}>()

const hoverCard = ref()
const isHovered = useElementHover(hoverCard)

const computedTime = computed(() =>
  Intl.DateTimeFormat('ru', {
    timeStyle: 'short',
    dateStyle: 'long',
    timeZone: 'Europe/Moscow'
  }).format(new Date(props.card.date))
)
</script>

