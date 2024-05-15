<template>
  <div class="container flex justify-center">
    <Card class="w-[350px]">
      <CardHeader>
        <CardTitle> Создать аккаунт</CardTitle>
      </CardHeader>
      <CardContent>
        <form @submit="onSubmit">
          <div class="grid items-center w-full gap-4">
            <FormField name="name" v-slot="{ componentField }">
              <FormItem>
                <div class="flex flex-col space-y-1.5">
                  <FormLabel>Имя</FormLabel>
                  <FormControl>
                    <Input v-model="DTO.name" placeholder="Дима" v-bind="componentField" />
                    <FormMessage />
                  </FormControl>
                </div>
              </FormItem>
            </FormField>
            <FormField name="email" v-slot="{ componentField }">
              <FormItem>
                <div class="flex flex-col space-y-1.5">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      v-model="DTO.email"
                      type="email"
                      placeholder="test@test.ru"
                      v-bind="componentField"
                    />
                    <FormMessage />
                  </FormControl>
                </div>
              </FormItem>
            </FormField>
            <FormField name="password" v-slot="{ componentField }">
              <FormItem>
                <div class="flex flex-col space-y-1.5">
                  <FormLabel>Пароль</FormLabel>
                  <FormControl>
                    <Input v-model="DTO.password" type="password" v-bind="componentField" />
                    <FormMessage />
                  </FormControl>
                </div>
              </FormItem>
            </FormField>
            <FormField name="conf" v-slot="{ componentField }">
              <FormItem>
                <div class="flex flex-col space-y-1.5">
                  <FormLabel>Подтверждение пароля</FormLabel>
                  <FormControl>
                    <Input v-model="DTO.conf" type="password" v-bind="componentField" />
                    <FormMessage />
                  </FormControl>
                </div>
              </FormItem>
            </FormField>
            <Button type="submit" class="justify-self-end">Создать</Button>
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
import { Input } from '@/components/ui/input'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

const formSchema = toTypedSchema(
  z
    .object({
      name: z
        .string({
          required_error: 'Введите имя'
        })
        .min(2, {
          message: 'Имя должно содержать не менее 2 символов'
        }),
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
        }),
      conf: z
        .string({
          required_error: 'Введите пароль'
        })
        .min(6, {
          message: 'Пароль должен содержать не менее 6 символов.'
        })
    })
    .refine((data) => data.password === data.conf, {
      message: 'Пароли не совпадают',
      path: ['conf']
    })
)

const { handleSubmit } = useForm({ validationSchema: formSchema })

const onSubmit = handleSubmit((values) => {
  console.log(values)
})

const DTO = shallowReactive({
  name: '',
  email: '',
  password: '',
  conf: ''
})
</script>

