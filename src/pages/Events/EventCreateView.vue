<template>
  <div class="container">
    <p class="text-2xl mb-[30px]">Ваше событие</p>
    <div class="border rounded-lg">
      <div
        class="grid grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 max-sm:grid-cols-1 md:max-lg:grid-cols-1 justify-items-center items-center p-[45px]"
      >
        <div class="flex flex-col items-center">
          <img
            src="@/assets/img/background/first-card.jpg"
            alt="photo"
            class="w-[300px] h-[220px] rounded-lg"
          />
          <Button class="mt-2 w-[150px]">Загрузить фото</Button>
        </div>
        <div class="flex lg:mt-2 md:mt-2 sm:mt-2 max-sm:mt-2">
          <Card class="w-[410px]">
            <CardHeader>
              <CardTitle>Название события</CardTitle>
              <CardDescription>Заполните данные</CardDescription>
            </CardHeader>
            <CardContent>
              <div class="flex flex-col space-y-1.5">
                <Label for="name">Название</Label>
                <Input v-model="DTO.name" id="name" placeholder="Название" />
              </div>
              <div class="flex flex-col mt-2 space-y-1.5">
                <Label for="game">Игра</Label>
                <Input v-model="DTO.game" id="game" placeholder="Монополия" />
              </div>
              <div class="flex flex-col mt-2 space-y-1.5">
                <Label for="place">Помещение</Label>
                <Input v-model="DTO.place" id="place" placeholder="Помещение" />
              </div>
              <div class="flex flex-col mt-2 space-y-1.5">
                <Label for="address">Адрес</Label>
                <Input v-model="DTO.address" id="address" placeholder="Адрес" />
              </div>
              <div class="flex flex-col mt-2 space-y-1.5">
                <Label for="how">Как добраться</Label>
                <Input v-model="DTO.howToGet" id="how" placeholder="Встреча у главного хода" />
              </div>
              <div class="flex flex-col mt-2 space-y-1.5">
                <Label>Количество участников {{ DTO.peopleCount[0] }}</Label>
                <Slider v-model="DTO.peopleCount" :max="10" :step="1" :default-value="[5]" />
              </div>
              <div class="flex flex-col mt-2 space-y-1.5">
                <Label for="date">Дата события</Label>
                <Input
                  type="datetime-local"
                  class="dark:[color-scheme:dark]"
                  v-model="DTO.dateTime"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

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

