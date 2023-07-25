<template>
  <div class="flex self-start gap-4" >
    <URadio :ui="{base: 'mr-[-6px]', ring: 'ring-1'}" @change="$emit('update:radio', selected)" color="blue-400" v-for="d of data" :value="d.value" :key="d.name" :label="d.label" v-model="selected" />
  </div>
</template>

<script setup>
const selected = ref()

defineProps({
  data: Array
})
</script>