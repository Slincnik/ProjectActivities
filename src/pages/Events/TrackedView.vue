<template>
  <div class="container mx-auto p-4">
    <div>
      <h2 class="text-3xl mb-4">Отслеживаемые события</h2>
      <TrackedCard
        buttonLabel="Мессенджер"
        :event="trackedEvent"
        @btnClick="openModal"
        type="tracked"
      />
    </div>
    <div class="mt-2">
      <h2 class="text-3xl mb-4">Мои события</h2>
      <TrackedCard
        buttonLabel="Мессенджер"
        :event="trackedEvent"
        @btnClick="openModal"
        showEditButton
        type="myEvents"
      />
    </div>
    <AlertDialog :open="isModalOpen" @open="isModalOpen = $event">
      <template #title> {{ modalContent.title }} </template>
      <template #desc>
        {{ modalContent.desc }}
      </template>
      <template #action>{{ modalContent.action }}</template>
    </AlertDialog>
  </div>
</template>

<script setup lang="ts">
import { AlertDialog } from '@/components/AlertDialog'
import { TrackedCard } from '@/components/TrackedCard'
import { computed, ref, watch } from 'vue'

const isModalOpen = defineModel<boolean>({ default: false })
const selectedType = ref<'tracked' | 'myEvents' | null>(null)

const openModal = (type: 'tracked' | 'myEvents') => {
  isModalOpen.value = true
  selectedType.value = type
}

const modalContent = computed(() => {
  if (selectedType.value === 'tracked') {
    return {
      title: 'Вы уверены отменить участие в мероприятии?',
      desc: 'Это действие невозможно отменить. Это приведет к необратимому удалению вас из числа участников.',
      action: 'Выйти'
    }
  } else if (selectedType.value === 'myEvents') {
    return {
      title: 'Вы уверены завершить мероприятие?',
      desc: 'Это действие невозможно отменить. Это приведет к необратимому завершению и удалению данного мероприятия.',
      action: 'Завершить'
    }
  }
  return {
    title: '',
    desc: '',
    action: ''
  }
})

watch(isModalOpen, (newVal) => {
  if (!newVal) selectedType.value = null
})

const trackedEvent = ref({
  title: 'Играем в UNO',
  imageUrl: '/src/assets/img/background/first-card.jpg',
  date: '01.01.2022',
  location: 'ТРК Арена',
  participants: 7,
  description: 'Описание события',
  howToGet: 'Встреча у главного хода',
  reserve: 5,
  address: 'Адрес',
  meetingPoint: 'test',
  details: 'Подробности'
})
</script>

