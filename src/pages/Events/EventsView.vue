<template>
  <div class="container">
    <div class="flex flex-row justify-between mt-2 max-sm:flex-col">
      <p class="text-3xl max-sm:mb-2">Предстоящие события</p>
      <div class="flex flex-row justify-end w-full max-w-[800px]">
        <Input class="border-gray-300 rounded-full hover:none" placeholder="Найти мероприятие" />
        <Button class="ml-2 rounded-md">Поиск</Button>
        <Button @click="$router.push({ path: '/events/create' })" class="ml-2 rounded-md"
          >Создать</Button
        >
      </div>
    </div>
    <div class="mt-20">
      <SkeletonCard v-if="isLoading || isError" />
      <div
        v-else-if="cards?.length"
        class="grid justify-items-center grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-1 gap-x-28 gap-y-4"
      >
        <EventCard v-for="card in cards" :key="card.id" :card="card" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { EventCard, SkeletonCard } from '@/components/EventCard'
import { getCards } from '@/api/events'

const { data: cards, isLoading, isError } = getCards()
</script>

