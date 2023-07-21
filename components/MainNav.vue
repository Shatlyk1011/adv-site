<template>
  <div >
    <nav class="bg-stone-700 py-4 px-20 xl:px-10 text-sm ">
      <div class= "mx-auto flex justify-between items-center text-gray-100 max-w-[1440px] box-border">
        <div class="flex-grow">logo</div>
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
            
            <li class="flex items-center gap-2 cursor-pointer hover:text-main transition">
              <ion-icon name="heart" style="font-size: 20px"></ion-icon>

            </li>

            <li class="flex items-center gap-2 cursor-pointer hover:text-main transition">
              <ion-icon name="person-circle" style="font-size: 20px"></ion-icon>
              <span>Ваш профиль</span>
            </li>

            <li class="cursor-pointer transition px-5 py-3 bg-main hover:bg-blue-600 rounded-sm">
              Подать объявление
            </li>
          </ul>
        </div>
      </nav>
      <!-- SEARCH BAR COMPONENT -->
    <Search />
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>