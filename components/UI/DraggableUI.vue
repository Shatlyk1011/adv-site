<template>
  <div>
    <draggable 
      class="flex gap-3 flex-wrap justify-center"
      :list="data"
      group="people" 
      @start="drag=true" 
      @end="drag=false" 
      item-key="id">
      <template #item="{element, index}">
        <div class="relative group">
          <img class="w-72 h-48 object-contain " :src="element.url" />
          <div @click="$emit('delete:image', index)" class="absolute opacity-0 cursor-grab active:cursor-grabbing flex items-center justify-center group-hover:opacity-100 group-active:opacity-0 top-0 left-0 w-full h-full bg-black/50 z-10 transition">
            <p class="text-xs px-3 py-1.5 bg-red-500 rounded-sm cursor-pointer font-medium text-white">Удалить</p>
          </div>
          <!-- show in small sizes -->
          <!-- <div class="text-xs cursor-pointer font-bold text-red-400 mt-1">Удалить</div> -->
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import draggable from "vuedraggable"

const props = defineProps(['data'])

console.log('props', props.data);
const drag = ref(false)

watch(props, () => console.log('props', props.data))
</script>