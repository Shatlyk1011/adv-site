<template>
  <div class="text-right z-30">
    <Menu as="div" class="relative inline-block text-left" v-slot="{open}">
      <div>
        <MenuButton
          class="inline-flex gap-2 w-full justify-center items-center  text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 hover:text-blue-500 transition">
          <ion-icon name="person" style="font-size: 18px"></ion-icon>
            Ваш профиль
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems 
          class="absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-sm bg-white shadow-sm ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-blue-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-sm px-2 py-2 text-sm',
                ]"
              >
                <ion-icon 
                  :active="active"
                  class="mr-2 h-5 w-5 text-blue-400"
                  aria-hidden="true" name="newspaper">
                </ion-icon>
                <p>Объявления</p>
              </button>
            </MenuItem>

            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-blue-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-sm px-2 py-2 text-sm',
                ]"
              >
                <ion-icon 
                  :active="active"
                  class="mr-2 h-5 w-5 text-blue-400"
                  aria-hidden="true" name="heart">
                </ion-icon>
                <p>Избранные</p>
              </button>
            </MenuItem>
          </div>

          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-blue-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-sm px-2 py-2 text-sm',
                ]"
              >
                <ion-icon 
                  :active="active"
                  class="mr-2 h-5 w-5 text-blue-400"
                  aria-hidden="true" name="pencil-outline">
                </ion-icon>
                <p>Изменить</p>
              </button>
            </MenuItem>
          </div>

          <div class="">
            <MenuItem v-slot="{ active }">
              <button
                @click="logout"
                :class="[
                  active ? 'bg-red-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-sm px-2 py-2 text-sm',
                ]"
              >
                <ion-icon 
                  :active="active"
                  class="mr-2 h-5 w-5 text-blue-400"
                  aria-hidden="true" name="exit">
                </ion-icon>
                <p>Выйти</p>
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script setup>

const {logout} = useAuth()

</script>