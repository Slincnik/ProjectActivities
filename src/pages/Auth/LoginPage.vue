<template>
  <div class="container flex justify-center">
    <Card class="w-[350px]">
      <CardHeader>
        <CardTitle> Войти в аккаунт</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div class="grid items-center w-full gap-4">
            <div class="flex flex-col space-y-1.5">
              <Label for="name">Email</Label>
              <Input
                :disabled="isPending"
                v-model="DTO.email"
                id="name"
                placeholder="test@test.ru"
              />
            </div>
            <div class="flex flex-col space-y-1.5">
              <Label for="password">Пароль</Label>
              <Input
                :disabled="isPending"
                v-model="DTO.password"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter class="flex justify-end px-6 pb-6">
        <Button :disabled="isPending" @click="mutate">Войти</Button>
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
import { useLogin } from '@/api/auth'

const DTO = shallowReactive({
  email: '',
  password: ''
})

const { isPending, mutate } = useLogin(DTO)
</script>

