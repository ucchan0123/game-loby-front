<template>
  <layout-guest>
    <div class="card-shadow">
      <div class="px-6 py-4">
        <h1 class="text-center text-xl font-bold text-yellow-500 mt-2 mb-6">ログイン</h1>
        <form @submit="onSubmit">
          <div class="mb-6">
            <label
              for="email"
              class="form-label"
            >
              メールアドレス
            </label>
            <input
              v-model="email"
              id="email"
              name="email"
              type="email"
              placeholder="メールアドレス"
              :class="`form-input ${errors['email'] ? 'border-red-500' : ''}`"
            >
            <p class="form-error-text">{{ errors['email'] }}</p>
          </div>
          <div class="mb-8">
            <label
              for="password"
              class="form-label"
            >
              パスワード
            </label>
            <input
              v-model="password"
              id="password"
              name="password"
              type="password"
              placeholder="パスワード"
              :class="`form-input ${errors['password'] ? 'border-red-500' : ''}`"
            >
            <p class="form-error-text">{{ errors['password'] }}</p>
          </div>
          <div class="mb-2 flex items-center justify-between">
            <base-form-submit :disabled="btnDisabled" text="ログイン" />
            <router-link
              to="/forgot-password"
              class="inline-block align-baseline font-bold text-sm text-blue-600 hover:underline"
            >
              パスワードを忘れた時は？
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </layout-guest>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

import { axios } from '@/plugins/axios'
import LayoutGuest from '@/layouts/Guest.vue'
import BaseFormSubmit from '@/components/BaseFormSubmit.vue'

export default defineComponent({
  components: { LayoutGuest, BaseFormSubmit },
  setup() {
    const router = useRouter()

    const btnDisabled = ref(false)

    const schema = yup.object({
      email: yup.string().required().email().max(255),
      password: yup.string().required().min(8).max(255),
    })

    const { handleSubmit, errors } = useForm({ validationSchema: schema })

    const { value: email } = useField('email')
    const { value: password } = useField('password')

    const onSubmit = handleSubmit(values => {
      btnDisabled.value = true
      axios
        .post('/login', values)
        .then(() => {
          router.push('/home')
        })
        .finally(() => btnDisabled.value = false)
    })

    return {
      errors,
      email,
      password,
      onSubmit,
      btnDisabled
    }
  },
})
</script>
