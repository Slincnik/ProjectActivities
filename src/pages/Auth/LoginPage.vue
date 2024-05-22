<template>
  <div class="container flex justify-center">
    <Card class="w-[350px]">
      <CardHeader>
        <CardTitle> Войти в аккаунт</CardTitle>
      </CardHeader>
      <CardContent>
        <form @submit="onSubmit" class="flex flex-col">
          <div class="grid items-center w-full gap-4">
            <FormField v-slot="{ componentField }" name="email">
              <FormItem>
                <div class="flex flex-col space-y-1.5">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      :disabled="isPending"
                      v-model="DTO.email"
                      type="email"
                      placeholder="test@test.ru"
                      v-bind="componentField"
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="password">
              <FormItem>
                <div class="flex flex-col space-y-1.5">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      :disabled="isPending"
                      v-model="DTO.password"
                      type="password"
                      placeholder="Password"
                      v-bind="componentField"
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            </FormField>
            <Button :disabled="isPending" type="submit" class="justify-self-end">Войти</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { shallowReactive } from 'vue'
import { useForm } from 'vee-validate'
import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'

import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { useLogin } from '@/api/auth'

const formSchema = toTypedSchema(
  z.object({
    email: z
      .string({
        required_error: 'Введите почту'
      })
      .email({
        message: 'Проверьте корректность почты'
      }),
    password: z
      .string({
        required_error: 'Введите пароль'
      })
      .min(6, {
        message: 'Пароль должен содержать не менее 6 символов.'
      })
  })
)

const { handleSubmit } = useForm({
  validationSchema: formSchema
})

const onSubmit = handleSubmit(() => mutate())

const DTO = shallowReactive({
  email: '',
  password: ''
})

const { isPending, mutate } = useLogin(DTO)
</script>
