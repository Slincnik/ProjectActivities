<template>
  <div class="container">
    <div>
      <h2 class="text-3xl mb-4">Отслеживаемые события</h2>
      <div
        class="grid grid-cols-2 gap-x-10 gap-y-4 max-lg:grid-cols-1"
        :class="{
          '!grid-cols-1': isLoadingTrackedCards || trackedCards!.length === 1
        }"
      >
        <SkeletonCard v-if="isLoadingTrackedCards || isTrackedError" />
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
        <SkeletonCard v-if="isLoadingSelfCards || isSelfError" />
        <TrackedCard
          v-else
          v-for="card in selfCards"
          :key="card.id"
          buttonLabel="Мессенджер"
          :event="card"
          @btnClick="openModal"
          showEditButton
          type="myEvents"
          @editClick="(id) => openEditModal(id)"
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
    <Dialog :open="store.showModal" @update:open="onEditModal">
      <DialogScrollContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
        </DialogHeader>
        <EventWork
          class="grid grid-cols-1 justify-items-center"
          title="Редактирование мероприятия"
          description="Заполните данные"
          v-model="clonedDTO"
        />
        <DialogFooter>
          <Button type="submit"> Изменить данные </Button>
        </DialogFooter>
      </DialogScrollContent>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useCloned } from '@vueuse/core'
import { getMyCards, getTrackedCards } from '@/api/events'
import { AlertDialog } from '@/components/AlertDialog'
import { TrackedCard } from '@/components/TrackedCard'
import { SkeletonCard } from '@/components/EventCard'
import EventWork from '@/components/EventWork/EventWork.vue'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogTitle,
  DialogScrollContent,
  DialogHeader,
  DialogFooter
} from '@/components/ui/dialog'
import { useModalStore } from '@/composables/useEditCardModal'

const isModalOpen = defineModel<boolean>({ default: false })
const selectedType = ref<'tracked' | 'myEvents' | null>(null)
const store = useModalStore()

const openModal = (type: 'tracked' | 'myEvents') => {
  isModalOpen.value = true
  selectedType.value = type
}

const openEditModal = (id: number) => {
  store.setParams({ id })
  store.toggleModal()
}

const onEditModal = () => {
  store.toggleModal()
  sync()
}

const DTO = ref({
  name: '',
  game: '',
  place: '',
  address: '',
  howToGet: '',
  peopleCount: [5],
  dateTime: ''
})

const { sync, cloned: clonedDTO } = useCloned(DTO, { manual: true })

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

const { data: selfCards, isLoading: isLoadingSelfCards, isError: isSelfError } = getMyCards()

const {
  data: trackedCards,
  isLoading: isLoadingTrackedCards,
  isError: isTrackedError
} = getTrackedCards()
</script>

