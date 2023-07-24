
<template>
  <Listbox v-model="selected">
    <div class="relative ">
      <ListboxButton
        class="relative Ufocus w-full cursor-pointer rounded-sm bg-blue-300/20 py-2 pl-3 pr-10 text-left shadow-sm Ufocus"
      >
        <span class="block truncate text-base">{{ selected.title }}</span>
        <span
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
        >
          <ion-icon 
            class="h-5 w-5 text-gray-400"
            aria-hidden="true" name="chevron-down-outline">
          </ion-icon>

        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute z-30 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          <ListboxOption
            @click = "$emit('update:selectedList', selected)"
            v-slot="{ active, selected }"
            v-for="d in data"
            :key="d.title"
            :value="d"
            as="template"
          >
            <li
              :class="[
                active ? 'bg-blue-100/50 text-main' : 'text-gray-900',
                'relative cursor-default select-none py-2 pl-10 pr-4',
              ]"
            >
              <span
                :class="[
                  selected ? 'font-medium text-main' : 'font-normal',
                  'block truncate',
                ]"
                >{{ d.title }}</span
              >
              <span
                v-if="selected"
                class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
              >
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup lang="ts">
import{ ICategory } from '@/assets/types'

const props = defineProps({
  data: {
    type: Array<ICategory>,
    required: true,
  }
})
const selected = ref(props.data[0])
</script>