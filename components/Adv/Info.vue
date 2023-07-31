<template>
  <div class="sticky top-0">
    <div class="text-2xl font-bold">{{ price }} {{ currency }}</div>
    <div class="mt-2 ">
      <p class="font-medium text-lg">
        Доставка: <span :class="{ 'text-green-500' : delivery, 'text-orange-400': !delivery, }"> 
        {{delivery ? 'Возможно, свяжитесь с продавцом для подробностей': 'Не возможно'}}
      </span>
      </p>
    </div>

    <div @click="showNumber = !showNumber" class="cursor-pointer  w-full px-4 py-6 text-center text-xl font-medium mt-10 text-white bg-blue-500 hover:bg-blue-600 transition">
      <p v-if="!showNumber">Показать номер</p>
      <p v-if="showNumber">{{ userInfo.phone }}</p>
    </div>

    <div  class="cursor-pointer w-full px-4 py-6 text-center text-xl font-medium mt-4 text-white bg-secondary hover:bg-secondary/80 transition">
      <p>Написать сообщение</p>
    </div>

    <div class="text-lg font-medium">
      <h5 class="text-2xl color-black font-bold mt-10">Пользователь</h5>
      <p class="text-blue-500">{{ userInfo.userName }}</p>
      <p>На "site" c <span>{{ userInfo.registeredAt }}</span></p>

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
