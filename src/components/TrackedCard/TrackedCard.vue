<template>
  <div
    class="border dark:border-white mx-auto p-4 rounded-lg w-auto flex flex-row max-lg:flex-col max-lg:items-center relative"
  >
    <div class="flex flex-col w-full max-lg:self-center">
      <div>
        <h3 class="text-2xl">{{ event.name }}</h3>
        <div class="flex gap-2 mt-2">
          <p class="text-gray-500 text-sm">
            {{ computedTime }}
          </p>
          <p class="text-gray-500 text-sm">{{ event.place }}</p>
          <p class="text-gray-500 text-sm">Приняло участие: {{ event.persons }} человек</p>
        </div>
      </div>
      <img
        :src="event.imageUrl"
        :alt="event.name"
        class="max-w-[390px] max-h-[260px] w-full h-full object-cover rounded-lg max-lg:self-center max-lg:max-w-screen-sm"
      />
    </div>
    <div
      class="border-2 p-4 ml-2 rounded-lg dark:border-white flex flex-col justify-between w-full h-auto max-w-[410px] max-lg:mt-2 max-lg:ml-0"
    >
      <div
        class="flex flex-col"
        :class="{
          'gap-5': showEditButton,
          'gap-7': !showEditButton
        }"
      >
        <h3>{{ event.description }}</h3>
        <h3>Резерв: {{ event.reserve }} человек</h3>
        <h3>{{ event.howToGet }}</h3>
        <h3>{{ event.street }}</h3>
        <h3>{{ event.description }}</h3>
      </div>
      <div class="mt-2">
        <Button class="w-full">{{ buttonLabel }}</Button>
        <Button v-if="showEditButton" @click="emit('editClick', event.id)" class="mt-2 w-full">
          Редактировать
        </Button>
      </div>
    </div>
    <div
      class="ml-2 self-start max-lg:mt-4 max-lg:ml-0 max-lg:absolute max-lg:top-0 max-lg:right-0 max-lg:mr-2"
    >
      <Button
        variant="outline"
        @click="emit('btnClick', $props.type)"
        class="rounded-full dark:border-white"
        size="icon"
      >
        <X class="w-4 h-4" />
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { X } from 'lucide-vue-next'
import type { Card } from '@/api/events'
import { Button } from '../ui/button'

interface Props {
  event: Card
  buttonLabel: string
  showEditButton?: boolean
  type: 'tracked' | 'myEvents'
}

const emit = defineEmits<{
  btnClick: [type: 'tracked' | 'myEvents']
  editClick: [id: number]
}>()

const props = defineProps<Props>()

const computedTime = computed(() => {
  return Intl.DateTimeFormat('ru', {
    timeStyle: 'short',
    dateStyle: 'long',
    timeZone: 'Europe/Moscow'
  }).format(new Date(props.event.date))
})
</script>

