<template>
  <div>
    <div class="flex flex-col items-center">
      <img
        src="@/assets/img/background/first-card.jpg"
        alt="photo"
        class="w-[300px] h-[220px] rounded-lg"
      />
      <Button class="mt-2 w-[150px]">Загрузить фото</Button>
    </div>
    <div class="flex flex-col lg:mt-2 md:mt-2 sm:mt-2 max-sm:mt-2">
      <Card class="max-sm:w-[300px] w-[410px]">
        <CardHeader>
          <CardTitle>{{ title }}</CardTitle>
          <CardDescription>{{ description }}</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="flex flex-col space-y-1.5">
            <Label for="name">Название</Label>
            <Input required model="DTO.name" id="name" placeholder="Название" />
          </div>
          <div class="flex flex-col mt-2 space-y-1.5">
            <Label for="game">Игра</Label>
            <Input required v-model="DTO.game" id="game" placeholder="Монополия" />
          </div>
          <div class="flex flex-col mt-2 space-y-1.5">
            <Label for="place">Помещение</Label>
            <Input required v-model="DTO.place" id="place" placeholder="Помещение" />
          </div>
          <div class="flex flex-col mt-2 space-y-1.5">
            <Label for="address">Адрес</Label>
            <Input required v-model="DTO.address" id="address" placeholder="Адрес" />
          </div>
          <div class="flex flex-col mt-2 space-y-1.5">
            <Label for="how">Как добраться</Label>
            <Input required v-model="DTO.howToGet" id="how" placeholder="Встреча у главного хода" />
          </div>
          <div class="flex flex-col mt-2 space-y-1.5">
            <Label for="count">Количество участников {{ DTO.peopleCount[0] }}</Label>
            <Slider
              id="count"
              v-model="DTO.peopleCount"
              :max="20"
              :step="1"
              :min="1"
              :min-steps-between-thumbs="1"
              :default-value="[5]"
              required
            />
          </div>
          <div class="flex flex-col mt-2 space-y-1.5">
            <Label for="date">Дата события</Label>
            <Input
              required
              id="date"
              type="datetime-local"
              class="dark:[color-scheme:dark]"
              v-model="DTO.dateTime"
            />
          </div>
          <Button v-if="buttonLabel" type="submit" class="mt-2 w-full">{{ buttonLabel }}</Button>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { Slider } from '../ui/slider'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card'

defineProps<{
  buttonLabel?: string
  title: string
  description: string
}>()

const DTO = defineModel<{
  name: string
  game: string
  place: string
  address: string
  howToGet: string
  peopleCount: number[]
  dateTime: string
}>({
  default: {
    name: '',
    game: '',
    place: '',
    address: '',
    howToGet: '',
    peopleCount: [5],
    dateTime: ''
  }
})
</script>

