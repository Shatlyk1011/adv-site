<template>
  <div class="flex">
    <Listbox v-model="selected">
      <div class="relative w-52">
        <ListboxButton
          class="relative Ufocus w-full h-full cursor-pointer rounded-sm bg-white  pl-3 pr-10 text-left border border-blue-200 sm:text-sm "
        >
          <span class="block truncate py-1">{{ selected }}</span>
          <span
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
          >

          <ion-icon 
            class="h-5 w-5 text-gray-400"
            aria-hidden="true" name="chevron-expand-outline">
          </ion-icon>
          </span>
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            <ListboxOption
              v-slot="{ active, selected }"
              v-for="city in data"
              :key="city"
              :value="city"
              as="template"
            >
              <li
                :class="[
                  active ? 'bg-blue-100 font-medium' : 'text-gray-900',
                  'relative cursor-default select-none py-2 pl-10 pr-4 ',
                ]"
              >
                <span
                  :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate py-1',
                  ]">{{ city }}</span>
                <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600"
                >
                <ion-icon 
                  class="h-5 w-5" aria-hidden="true" name="checkmark-outline">
                </ion-icon>

                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>

<script setup>

const props = defineProps({
  data: {
    type: Array[String],
    required: true
  }
})
const selected = ref(props.data[0])

</script>