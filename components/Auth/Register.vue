<template>
  <form @keydown.prevent.enter="handleRegistration" class="mt-4 flex flex-col gap-4"> 
    <h2 class="text-2xl font-bold text-center">Зарегистрируйтесь</h2>
    <label class="block">
      <span class="ml-[1px] font-medium ">
        Имя
      </span>
      <input type="text" v-model="displayName" name="text" class="mt-1 px-3 py-2 bg-gray-100 border  border-blue-300 focus:outline-none focus:border-blue-500 block w-full rounded-sm sm:text-sm " required/>
    </label>

    <label class="block">
      <span class="ml-[1px] font-medium ">
         Email
      </span>
      <input type="email" v-model="email" name="email" class="mt-1 px-3 py-2 bg-gray-100 border-2  border-blue-300  focus:outline-none focus:border-blue-500 block w-full rounded-sm sm:text-sm" required/>
    </label>

    <label class="block">
      <span class="ml-[1px] font-medium ">
        Пароль
      </span>
      <input type="password" v-model="password" name="password" class="mt-1 px-3 py-2 bg-gray-100 border-2 border-blue-300  focus:outline-none focus:border-blue-500 block w-full rounded-sm sm:text-sm" required/>
    </label>

    <div class="error my-[-6px]" v-if="authError">{{ authError }}</div>

    <UButton @click="handleRegistration" label="Зарегистрироваться" class="UButton justify-center" :disabled="isPending"/>
  </form>
</template>

<script setup>
const displayName = ref('')
const email = ref('')
const password = ref('')
const regSide = useState('regSide')

const {register, authError, isPending} = useAuth()

const handleRegistration = () => {
  register(email.value, password.value, displayName.value)

  if(!authError.value) regSide.value = false
}
</script>