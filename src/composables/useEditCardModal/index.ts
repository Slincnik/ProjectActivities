import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useModalStore = defineStore('editCardModal', () => {
  const showModal = ref(false)

  const toggleModal = () => {
    showModal.value = !showModal.value
  }

  const params = ref({})

  const setParams = (data: { id: number }) => {
    params.value = data
  }

  watch(showModal, () => {
    if (!showModal.value) {
      params.value = {}
    }
  })

  return { showModal, params, toggleModal, setParams }
})

