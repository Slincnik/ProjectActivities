<template>
  <div class="container">
    <p class="text-2xl mb-[30px]">Ваше событие</p>
    <div class="border rounded-lg">
      <form @submit.prevent="onSubmit">
        <EventWork
          class="p-[40px] grid grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 max-sm:grid-cols-1 md:max-lg:grid-cols-1 justify-items-center items-center"
          v-model="DTO"
          title="Создание мероприятия"
          description="Заполните данные"
          button-label="Создать"
        />
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import EventWork from '@/components/EventWork/EventWork.vue'

const onSubmit = () => {
  console.log('SUBMIT')
}

const DTO = ref<{
  name: string
  game: string
  place: string
  address: string
  howToGet: string
  peopleCount: number[]
  dateTime: string
}>({
  name: '',
  game: '',
  place: '',
  address: '',
  howToGet: '',
  peopleCount: [5],
  dateTime: ''
})
</script>

