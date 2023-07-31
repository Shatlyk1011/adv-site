<template>
  <div class="min-h-full w-full mt-10 px-20">
    <div class="singleAdv grid gap-10" v-if="adv">
      <AdvInfo  :adv="adv"/>
      <AdvContact :price="adv.price" :currency="adv.currency" :delivery="adv.delivery" :userInfo="adv.userInfo"/>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const id = route.params.id as string

const { getDocument, document: adv } = useFirestore()

onMounted(async () => await getDocument('advs', id))

</script>

<style>
.singleAdv {
  grid-template-columns: 4fr 3fr;
}
</style>