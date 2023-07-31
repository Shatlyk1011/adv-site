<template>
  <div>
    <h4 class="text-3xl text-black font-meidium capitalize font-bold">{{ adv.title }}</h4>
    <div class=" cursor-pointer font-medium text-sm flex items-center gap-1 bg-gray-200 hover:bg-gray-300/70 transition w-max p-2 rounded-sm mt-6">
      <ion-icon name="heart-outline" style="font-size: 18px"></ion-icon>
      <p>Добавить в избранное</p>
    </div>

    <div class="border group relative border-stone-400/70 w-full h-[500px] mt-4">
      
      <img class="object-cover absolute top-0 left-0 right-0 bottom-0 min-w-full min-h-full m-auto bg-stone-500" :src="adv.images?.urls[0].url" alt="">

      <div class="flex items-center justify-center cursor-pointer absolute top-0 left-0 h-full w-10 transition hover:bg-stone-700/30 text-white">
        <ion-icon class="group-hover:opacity-100 opacity-0 transition" name="chevron-back-outline" style="font-size: 24px"></ion-icon>
      </div>

      <div class="flex items-center justify-center cursor-pointer absolute top-0 right-0 h-full w-10 transition hover:bg-stone-700/30 text-white">
        <ion-icon class="group-hover:opacity-100 opacity-0 transition"  name="chevron-forward-outline" style="font-size: 24px"></ion-icon>
      </div>
    </div>

    <div class="mt-10">
      <h5 class="text-2xl color-black font-bold ">Адрес</h5>
      <div class="font-medium flex flex-col text-lg gap-1.5 mt-2">
        <p>{{ adv.appointment.region }}, {{ adv.appointment.city }},</p>
        <p>{{ adv.appointment.address }}</p>
        <p v-if="adv.appointment.addressNumber">Номер дома: {{ adv.appointment.addressNumber }}</p>
      </div>
    </div>

    <div class="mt-6">
      <h5 class="text-2xl color-black font-bold ">Описание</h5>
      <p class="mt-2">{{ adv.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IAdvertisement } from 'assets/types';
defineProps({
  adv: {
    type: Object as PropType<IAdvertisement>,
    required: true
  }
})
</script>
