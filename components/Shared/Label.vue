<template>
  <label class="flex flex-col gap-2 text-base ">
    <p class="text-base font-medium">{{title}}</p>
    <slot/>
  </label>
</template>

<script setup>

defineProps(['title'])

</script>
