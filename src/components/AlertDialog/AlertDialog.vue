<template>
  <AlertDialog :open @update:open="$emit('open', $event)">
    <AlertDialogTrigger as-child v-if="$slots.trigger">
      <slot name="trigger">
        <Button>Открыть</Button>
      </slot>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>
          <slot name="title"> Заголовок </slot>
        </AlertDialogTitle>
        <AlertDialogDescription v-if="$slots.desc">
          <slot name="desc"> Описание </slot>
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Отменить</AlertDialogCancel>
        <AlertDialogAction>
          <slot name="action"> Удалить </slot>
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>

<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { Button } from '../ui/button'
import type { VNode } from 'vue'

defineSlots<{
  trigger(): VNode
  title(): VNode
  desc(): VNode
  action(): VNode
}>()

defineProps<{
  open: boolean
}>()

defineEmits<{
  open: [open: boolean]
}>()
</script>

