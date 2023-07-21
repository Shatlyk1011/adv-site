<template>
  <div>
    <h1 class="text-center text-5xl font-semibold tracking-tight">Категории</h1>
    <div class="flex gap-6 mt-8 justify-between flex-wrap">
      <div v-for="cat in categories" :key="cat.title">
        <div class="flex flex-col gap-2 items-center ">
          <img class="w-32 h-32 object-cover" :src="cat.imgUrl" :alt="`${cat.title} image`">
          <p class="text-sm font-medium">{{ cat.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { categories } from 'assets/data';

</script>
