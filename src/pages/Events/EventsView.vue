<template>
  <div class="container px-1 max-sm:px-2 sm:px-2 xl:px-1">
    <p class="text-3xl">Предстоящие события</p>
    <div class="flex flex-row justify-end mt-2">
      <Input
        class="border-gray-300 w-[800px] rounded-full hover:none"
        placeholder="Найти мероприятие"
      />
      <Button class="ml-2 rounded-md">Поиск</Button>
      <Button class="ml-2 rounded-md">Создать</Button>
    </div>
    <div
      class="grid grid-cols-3 justify-items-center xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 max-sm:grid-cols-1 gap-x-10 gap-y-4 mt-20"
    >
      <SkeletonCard v-if="isLoading" />
      <EventCard v-else-if="cards?.length" v-for="card in cards" :key="card.id" :card="card" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { EventCard, SkeletonCard } from '@/components/EventCard'
import { getCards } from '@/api/events'

const { data: cards, isLoading } = getCards()
</script>

