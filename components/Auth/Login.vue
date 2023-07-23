<template>
  <form @submit="handleLogin" class="mt-4 flex flex-col gap-4"> 
    <h2 class="text-2xl font-bold text-center">Войти</h2>
    <label class="block">
      <span class="ml-[2px] block  font-medium ">
        Email
      </span>
      <input type="email" name="email" class="mt-1 px-3 py-2 bg-gray-100 border-2  border-blue-300  focus:outline-none focus:border-blue-500 block w-full rounded-sm sm:text-sm" required/>
    </label>

    <label class="block">
      <span class="ml-[2px] block  font-medium ">
        Пароль
      </span>
      <input type="password" name="password" class="mt-1 px-3 py-2 bg-gray-100 border-2  border-blue-300  focus:outline-none focus:border-blue-500 block w-full rounded-sm sm:text-sm" required/>
    </label>

    <UButton label="Войти" class="UButton justify-center"/>
  </form>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>