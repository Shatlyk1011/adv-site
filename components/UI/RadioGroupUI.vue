<template>
  <div class="w-full">
    <RadioGroup v-model="selectedRadio">
      <div class="flex gap-x-3 gap-y-2 flex-wrap">
        <RadioGroupOption
          @click="$emit('update:selectedRadio', selectedRadio)"
          as="template"
          v-for="d in data"
          :key="d"
          :value="d"
          v-slot="{ active, checked }"
        >
          <div
            :class="[
              active
                ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-300'
                : '',
              checked ? 'bg-blue-500 text-white ' : 'bg-white ',
            ]"
            class="relative mt-0 flex cursor-pointer rounded-md ring-1 px-3 py-2 shadow-sm focus:outline-none"
          >
            <div class="flex gap-2 items-center  justify-between">
              <div class="flex items-center">
                <div class="text-sm">
                  <RadioGroupLabel
                    as="p"
                    :class="checked ? 'text-white' : 'text-gray-900'"
                    class="font-medium">
                    {{ d }}
                  </RadioGroupLabel>
                </div>
              </div>
              <div v-show="checked" class="text-white flex">
                <ion-icon name="checkmark-outline" style="font-size: 14px"></ion-icon>
              </div>
            </div>
          </div>
        </RadioGroupOption>
      </div>
    </RadioGroup>
  </div>
</template>

<script setup lang="ts">
defineProps({
  data: {
    type: Array<string>,
  }
})
const selectedRadio = ref('')
</script>
