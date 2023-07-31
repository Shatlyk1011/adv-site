<template>
  <div class="w-full min-h-[300px]">
    <div class="flex flex-col gap-1">
      <img class="w-full h-56 object-cover" v-if="adv.images?.urls[0]" :src="adv.images?.urls[0].url" alt="">
      <h4 class="text-blue-500 cursor-pointer hover:text-blue-600 font-bold text-xl mt-1">{{adv.title}}</h4>
      <div class="text-black font-medium">{{ adv.price }}</div>
      <div class="text-gray-500">{{ adv.appointment.region }}, {{ adv.appointment.city }}</div>
      <div class="text-gray-500">{{ adv.createdAt }}</div>
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