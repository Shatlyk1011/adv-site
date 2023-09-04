<template>
  <div class="min-h-full w-full mt-10 px-20 box-border">
    <div class="advId grid grid-cols-8 gap-10" v-if="adv">
      <AdvInfo class="col-span-5" :adv="adv"/>
      <AdvContact class="col-span-3" :price="adv.price" :currency="adv.currency" :delivery="adv.delivery" :userInfo="adv.userInfo"/>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const id = route.params.id as string

const { getDocument, document: adv } = useFirestore()

onMounted(async () => await getDocument('advs', id))

</script>