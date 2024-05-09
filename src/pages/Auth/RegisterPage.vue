<template>
  <div class="container flex justify-center">
    <Card class="w-[350px]">
      <CardHeader>
        <CardTitle> Создать аккаунт</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div class="grid items-center w-full gap-4">
            <div class="flex flex-col space-y-1.5">
              <Label for="name">Имя</Label>
              <Input v-model="DTO.name" id="name" placeholder="Дима" />
            </div>
            <div class="flex flex-col space-y-1.5">
              <Label for="email">Email</Label>
              <Input v-model="DTO.email" id="email" placeholder="test@test.ru" />
            </div>
            <div class="flex flex-col space-y-1.5">
              <Label for="password">Пароль</Label>
              <Input v-model="DTO.password" id="password" type="password" placeholder="Password" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter class="flex justify-end px-6 pb-6">
        <Button>Создать</Button>
      </CardFooter>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { shallowReactive } from 'vue'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

const DTO = shallowReactive({
  name: '',
  email: '',
  password: ''
})
</script>

