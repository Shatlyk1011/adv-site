<template>
  <section class="mt-10">
    <h2>Последние объявления</h2>
    <!-- <div class="grid grid-cols-4 gap-x-4 gap-y-10"> -->
    <div class="grid grid-cols-4 grid-flow-dense gap-x-4 gap-y-10">
      <AdvCard/>
      <AdvCard/>
      <AdvCard/>
      <AdvCard/>
      <AdvCard/>
      <AdvCard/>
    </div>


  </section>
</template>

<script setup>

const {getCollection} = useFirestore()

const res = await getCollection('advs')

console.log(res);


setTimeout(() => {
  console.log(res);  
}, 3000);


</script>