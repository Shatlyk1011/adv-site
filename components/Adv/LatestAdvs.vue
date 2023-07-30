<template>
  <section class="mt-10">
    <h2>Последние объявления</h2>
    <div class="grid grid-cols-4 grid-flow-dense gap-x-4 gap-y-10">
<!--       <AdvCard/> -->
      heheh
    <pre>{{ advs }}</pre>

    </div>

  </section>
</template>

<script setup>

const {data:advs} = await useFetch('/api/advs')

</script>