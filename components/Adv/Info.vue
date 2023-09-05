<!-- <template>
  <div class="w-full" >
    <h4 class="text-3xl text-black capitalize font-bold">{{ adv.title }}</h4>
    <div class=" cursor-pointer font-medium text-sm flex items-center gap-1 bg-gray-200 hover:bg-gray-300/70 transition w-max p-2 rounded-sm mt-6">
      <ion-icon name="heart-outline" style="font-size: 18px"></ion-icon>
      <p>Добавить в избранное</p>
    </div>

    <div class="relative group">
      <div class="prev flex z-50 items-center justify-center cursor-pointer absolute top-0 left-0 h-full w-10 transition hover:bg-stone-700/30 text-white">
        <ion-icon class="group-hover:opacity-100 opacity-0 transition" name="chevron-back-outline" style="font-size: 24px"></ion-icon>
      </div>

      <div class="next flex z-50 items-center justify-center cursor-pointer absolute top-0 right-0 h-full w-10 transition hover:bg-stone-700/30 text-white">
        <ion-icon class="group-hover:opacity-100 opacity-0 transition" name="chevron-forward-outline" style="font-size: 24px"></ion-icon>
      </div>

      <Swiper
        class="border border-stone-400/70 h-[500px] mt-4"
        :slides-per-view="1" 
        :modules="[Pagination, Navigation]"
        :navigation="{ prevEl: '.prev', nextEl: '.next' }"
        :modules="[Pagination, Navigation]"
        >
        <SwiperSlide class="w-full" v-for="img in adv.images?.urls" :key="img.url" :lazy="true">
          <div class=" w-full h-full">
            <img class="object-cover inline top-0 left-0 right-0 bottom-0 h-full w-full m-auto bg-stone-500" :src="img.url" alt="" loading="lazy">
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
        
    <div class="flex gap-2 flex-wrap mt-6 w-full" v-if="adv.images?.urls">
      <div class="pagination w-20 h-14 cursor-pointer border border-transparent hover:border-blue-500 transition" v-for="img in adv.images?.urls" :key="img.url">
        <img id="pagination-item" class=" w-full h-full object-cover" :src="img.url" alt="hehe">
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
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';

import { IAdvertisement } from 'assets/types';
// import pagination navigation
defineProps({
  adv: {
    type: Object as PropType<IAdvertisement>,
    required: true
  }
})

</script>

<style>
.pagination-item--active {
  background: red !important;
}
</style> -->

<template>
  <swiper :pagination="pagination" :modules="modules" class="mySwiper">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';

  import './style.css';

  // import required modules
  import { Pagination } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        pagination: {
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        },
        modules: [Pagination],
      };
    },
  };
</script>

<style>
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>