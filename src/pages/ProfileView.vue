<template>
  <div class="container px-1 max-sm:px-2 sm:px-2 xl:px-1">
    <p class="text-3xl">Данные профиля</p>
    <template v-if="user">
      <div class="flex flex-row justify-between max-md:items-center max-md:flex-col max-sm">
        <Card class="w-[300px] mt-4">
          <CardHeader>
            <CardTitle>Личная карточка</CardTitle>
          </CardHeader>
          <CardContent>
            <Label for="name">Имя</Label>
            <Input id="name" placeholder="Имя" v-model="user.name" />
            <Label for="email">Email</Label>
            <Input id="email" placeholder="test@test.ru" v-model="user.email" />
          </CardContent>
          <CardFooter class="flex flex-col">
            <Button class="w-full">Сохранить данные</Button>
            <Dialog>
              <DialogTrigger as-child>
                <Button class="w-full mt-2">Поменять пароль</Button>
              </DialogTrigger>
              <DialogContent class="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Поменять пароль</DialogTitle>
                </DialogHeader>
                <div class="grid gap-4 py-4">
                  <div class="grid grid-cols-4 items-center gap-4">
                    <Label for="password"> Текущий пароль </Label>
                    <Input id="password" type="password" class="col-span-3" />
                  </div>
                  <div class="grid grid-cols-4 items-center gap-4">
                    <Label for="newPassword"> Новый пароль </Label>
                    <Input id="newPassword" type="password" class="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit"> Сохранить </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </Card>
        <Card class="mt-4 ml-2">
          <CardHeader>
            <CardTitle>Статистика</CardTitle>
          </CardHeader>
          <CardContent class="items-center">
            <p class="text-xl">Количество опубликованных мероприятий: 10</p>
            <p class="text-xl mt-2">Количество отслеживаемых мероприятий: 10</p>
            <p class="text-xl mt-2">Количество завершенных мероприятий: 10</p>
          </CardContent>
        </Card>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useCloned } from '@vueuse/core'

import { useAuthStore } from '@/api/auth'
import { Card, CardContent, CardTitle, CardHeader, CardFooter } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

const { getUser } = useAuthStore()
const { cloned: user } = useCloned(getUser)
</script>

