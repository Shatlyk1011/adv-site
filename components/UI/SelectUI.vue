<template>
  <div class="flex">
    <HeadlessListbox v-model="selectedCity">
      <div class="relative w-52">
        <HeadlessListboxButton
          class="relative w-full h-full cursor-pointer rounded-sm bg-white  pl-3 pr-10 text-left border border-blue-200 focus:outline-none focus-visible:main focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 sm:text-sm"
        >
          <span class="block truncate py-1">{{ selectedCity }}</span>
          <span
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
          >

          <ion-icon 
            class="h-5 w-5 text-gray-400"
            aria-hidden="true" name="chevron-expand-outline">
          </ion-icon>
          </span>
        </HeadlessListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <HeadlessListboxOptions
            class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            <HeadlessListboxOption
              v-slot="{ active, selected }"
              v-for="city in cities"
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
            </HeadlessListboxOption>
          </HeadlessListboxOptions>
        </transition>
      </div>
    </HeadlessListbox>
  </div>
</template>

<script setup>
const cities = ['Весь Туркменистан', 'Lebap', 'Ashgabat', 'Mary', 'Dashoguz', 'Ahal', 'Balkan']
const selectedCity = ref(cities[0])

</script>