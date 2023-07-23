<template>
  <fieldset class="flex gap-4 mx-auto max-w-[1280px] p-4 box-content bg-white px-10 my-6">
    <div class="flex-grow flex items-center gap-4">
      <ion-icon name="search-outline" style="font-size: 24px"></ion-icon>
      <input class="flex-grow border border-transparent bg-transparent focus:outline-none focus:border focus:border-blue-200 px-4 py-2" type="search" placeholder="Что ищите?">
    </div>

    <UISelectUI :data="cities"/>

    <UButton class="UButton"  label="Поиск"/>
  </fieldset>
</template>

<script setup lang="ts">

const cities = ['Весь Туркменистан', 'Lebap', 'Ashgabat', 'Mary', 'Dashoguz', 'Ahal', 'Balkan']
const selected = ref(cities[0])
</script>

<style scoped>

</style>