<template>
  <div
    class="border dark:border-white mx-auto p-4 rounded-lg w-8/12 flex flex-row max-lg:flex-col max-lg:items-center relative"
  >
    <div class="flex flex-col w-full max-lg:self-center">
      <div>
        <h3 class="text-2xl">{{ event.title }}</h3>
        <div class="flex gap-2 mt-2">
          <p class="text-gray-500 text-sm">
            {{
              Intl.DateTimeFormat('ru', { dateStyle: 'short', timeStyle: 'short' }).format(
                new Date(event.date)
              )
            }}
          </p>
          <p class="text-gray-500 text-sm">{{ event.location }}</p>
          <p class="text-gray-500 text-sm">Приняло участие: {{ event.participants }} человек</p>
        </div>
      </div>
      <img
        :src="event.imageUrl"
        :alt="event.title"
        class="max-w-[390px] max-h-[260px] w-full h-auto object-cover rounded-lg max-lg:self-center max-lg:max-w-screen-sm"
      />
    </div>
    <div
      class="border-2 p-4 ml-2 rounded-lg dark:border-white flex flex-col justify-between w-full h-[320px] max-w-[410px] max-lg:mt-2 max-lg:ml-0"
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
        <h3>{{ event.address }}</h3>
        <h3>{{ event.details }}</h3>
      </div>
      <div class="mt-2">
        <Button class="w-full">{{ buttonLabel }}</Button>
        <Button v-if="showEditButton" class="mt-2 w-full"> Редактировать </Button>
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
import { Button } from '../ui/button'
import { X } from 'lucide-vue-next'

const emit = defineEmits<{
  btnClick: [type: 'tracked' | 'myEvents']
}>()

interface Props {
  event: any
  buttonLabel: string
  showEditButton?: boolean
  type: 'tracked' | 'myEvents'
}

defineProps<Props>()
</script>

