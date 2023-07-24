<template>
  <div>
    <nav class="bg-stone-700 py-3 px-20 xl:px-10 text-sm ">
      <div class= "mx-auto flex justify-between items-center text-gray-100 max-w-[1440px] box-border">
        <div class="flex-grow">
          <NuxtLink to="/">logo</NuxtLink>
        </div>
        <ul class="flex gap-8 xl:gap-6 items-center font-medium transition ">
          <li class="flex gap-1">
            <span class="cursor-pointer hover:text-main transition">TM</span>
            <span class="select-none">|</span>
            <span class="cursor-pointer hover:text-main transition">RU</span>
          </li>
          <li class="flex items-center gap-2 cursor-pointer hover:text-main transition">
            <ion-icon name="paper-plane" style="font-size: 18px"></ion-icon>
            <span>Сообщения</span>
          </li>
          
          <li  class="flex items-center gap-2 cursor-pointer hover:text-main transition">
            <ion-icon name="heart" style="font-size: 20px"></ion-icon>
          </li>

          <!-- user profile -->
          <li v-if="user" class="flex items-center relative gap-2 cursor-pointer hover:text-main transition">
            <UIDropdownUI title="Ваш профиль"/>
          </li>

          <li v-if="!user" @click="regSide = true" class="cursor-pointer mr-[-16px] transition px-5 py-3 bg-secondary hover:bg-secondary/80 rounded-sm">
            Вход и регистрация
          </li>

          <li class="cursor-pointer transition px-5 py-3 bg-blue-600 hover:bg-blue-700 rounded-sm">
            <NuxtLink to="/new">Подать объявление</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>

  </div>
</template>

<script setup lang="ts">
const userStore = useUserStore()
const regSide = useState('regSide')
const user = computed(() =>  userStore.user)
</script>

<style scoped>

</style>