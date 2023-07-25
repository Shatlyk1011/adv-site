<template>
  <form @keydown.prevent.enter="handleLogin" class="mt-4 flex flex-col gap-4"> 
    <h2 class="text-2xl font-bold text-center">Войти</h2>
    <label class="block">
      <span class="ml-[1px] font-medium ">
        Email
      </span>
      <input type="email" v-model="email" name="email" class="Ufocus mt-1 px-3 py-2 bg-gray-100 border-2 block w-full rounded-sm sm:text-sm" required/>
    </label>

    <label class="block">
      <span class="ml-[1px] font-medium ">
        Пароль
      </span>
      <input type="password" v-model="password" name="password" class="Ufocus mt-1 px-3 py-2 bg-gray-100 border-2 block w-full rounded-sm sm:text-sm" required/>
    </label>
    <div class="error my-[-6px]" v-if="authError"> {{ authError }} </div>
    <UButton @click="handleLogin" label="Войти " class="UButton Ufocus justify-center"/>
  </form>
</template>

<script setup lang="ts">

const email = ref('')
const password = ref('')
const regSide = useState('regSide')
const {authError, login, isPending} = useAuth()

const handleLogin = async () => {
  await login(email.value, password.value)
  if(!authError.value) regSide.value = false
} 

</script>