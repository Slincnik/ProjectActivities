<template>
  <div class="container mx-auto p-4">
    <div>
      <h2 class="text-3xl mb-4">Отслеживаемые события</h2>
      <div
        class="grid grid-cols-2 gap-x-10 gap-y-4 max-lg:grid-cols-1"
        :class="{
          '!grid-cols-1': isLoadingTrackedCards || trackedCards!.length === 1
        }"
      >
        <SkeletonCard v-if="isLoadingTrackedCards" />
        <TrackedCard
          v-else
          v-for="card in trackedCards"
          :key="card.id"
          buttonLabel="Мессенджер"
          :event="card"
          @btnClick="openModal"
          type="tracked"
        />
      </div>
    </div>
    <div class="mt-10">
      <h2 class="text-3xl mb-4">Мои события</h2>
      <div
        class="grid grid-cols-2 gap-x-10 gap-y-4 max-lg:grid-cols-1"
        :class="{
          '!grid-cols-1': isLoadingSelfCards || selfCards!.length === 1
        }"
      >
        <SkeletonCard v-if="isLoadingSelfCards" />
        <TrackedCard
          v-else
          v-for="card in selfCards"
          :key="card.id"
          buttonLabel="Мессенджер"
          :event="card"
          @btnClick="openModal"
          showEditButton
          type="myEvents"
        />
      </div>
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
import { getMyCards, getTrackedCards } from '@/api/events'
import { AlertDialog } from '@/components/AlertDialog'
import { TrackedCard } from '@/components/TrackedCard'
import { SkeletonCard } from '@/components/EventCard'
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
const { data: selfCards, isLoading: isLoadingSelfCards } = getMyCards()

const { data: trackedCards, isLoading: isLoadingTrackedCards } = getTrackedCards()
</script>

