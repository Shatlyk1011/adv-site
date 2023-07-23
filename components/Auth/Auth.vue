<template>
  <div>
    <UButton label="Open" color="red" @click="isOpen = true" />

    <USlideover 
      :ui="{background: 'bg-gray-200', overlay: {background: ''}, width: 'w-screen max-w-md'}"
      v-model="isOpen">
      <div class="px-8 py-6">
        <div class="flex items-center justify-center gap-3 border-4 rounded-sm border-blue-500 px-2 py-1 text-center cursor-pointer hover:bg-blue-200 transition">
          <img class="w-8 h-8" src="/icons/google-48.png" alt="google icon">
          <p class="text-xl font-bold">Продолжить через Google</p>
        </div>

        <div class="text-lg font-medium text-center mt-4">
          <p class="text-gray-400">
            или
          </p>
        </div>
        <component :is="component ? Login : Register"/>

        <span class="flex justify-center items-center gap-1 mt-4 font-medium font-base">
          <p v-if="!component">Есть аккаунт?</p>  
          <p v-else>Нету аккаунта?</p>  
          <UButton 
            @click="component = !component" 
            :ui="{size: 'xl', font: 'font-bold'}"
            class="transition text-base"  
            :label="component ? 'Регистрация' : 'Войти' " 
            :padded="false" 
            variant="link" />
        </span>
        
      </div>
    </USlideover>
  </div>
</template>

<script setup>
import Login from './Login.vue'
import Register from './Register.vue'

const isOpen = ref(false)

const component = ref(false) 
</script>