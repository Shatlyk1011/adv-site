<template>
  <section class="mt-16">
    <h2 class="text-4xl font-medium mb-4 text-center">Последние объявления</h2>
    <div class="grid grid-cols-4 grid-flow-dense gap-x-4 gap-y-10">
      <AdvCard :adv="adv" v-for="adv in latestAdvs" :key="adv.title"/>
    </div>

  </section>
</template>

<script setup>
const {data:latestAdvs} = await useFetch('/api/advs')
</script>