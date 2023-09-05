<template>
  <div >
    <div class="text-2xl font-bold">{{ price }} {{ currency }}</div>
    <div class="mt-2">
      <p class="font-medium text-lg">
        Доставка: <span :class="{ 'text-green-600' : delivery, 'text-orange-500': !delivery, }"> 
        {{delivery ? 'Возможно': 'Не возможно'}}
      </span>
      </p>
    </div>

    <div @click="showNumber = !showNumber" class="cursor-pointer w-full px-4 py-6 text-center text-xl font-medium mt-10 text-white bg-blue-500 hover:bg-blue-600 transition">
      <p v-if="!showNumber">Показать номер</p>
      <p v-if="showNumber" class="letter-spacing">{{ userInfo.phone }}</p>
    </div>

    <!-- <div  class="cursor-pointer w-full px-4 py-6 text-center text-xl font-medium mt-4 text-white bg-secondary hover:bg-secondary/80 transition">
      <p>Написать сообщение</p>
    </div> -->

    <div class="text-lg font-medium w-full px-6 py-4 mt-10 shadow-md ">
      <div class="flex text-xl gap-4 items-center">
        <h5 class="text-xl color-black font-bold">
          Пользователь: <span class="text-blue-600">{{ userInfo.userName }}</span>
        </h5>
      </div>
      <!-- <p class="mt-2 text-xl">На сайте c <span>{{ userInfo.registeredAt }}</span></p> -->
      <p class="mt-2 text-xl">На сайте c <span class="text-blue-600">24.02.2022</span></p>
    </div>

  </div>
</template>

<script setup lang="ts">
import {TUserInfo} from '@/assets/types'
/* use data fns  */

const showNumber = ref(false)


defineProps({
  price: {
    required: true,
    type:String
  },
  currency: {
    required: true,
    type: String
  },
  delivery: {
    required: true,
    type: Boolean
  },

  userInfo: {
    required: true,
    type: Object as PropType<TUserInfo>
  }
})

</script>
