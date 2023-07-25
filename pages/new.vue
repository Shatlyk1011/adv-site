<template>
  <div class="px-20 box-border py-10 ">
    <h1 class="text-4xl font-bold tracking-tight">Создать обявление</h1>

    <form class="flex flex-col mt-6 gap-4">
      <UCard class="rounded-sm">
        <template #header>
          <h3 class="text-2xl font-medium">
            Опишите в подробностях ваш товар
          </h3>

          <p class="text-xs font-bold mt-1 ">
            <span class="text-red-500">*</span> - обязательные поля
          </p>
        </template>

      <!-- description section -->
        <div class="flex flex-col gap-8 min-h-[300px] max-w-[70%]">
          <label class="flex flex-col gap-3 text-base ">
            <p class=" after:content-['*'] after:text-red-500 font-medium">Укажите название </p>
            <UInput 
              :ui="{ variant: {none: ''}, size: {xl: 'text-lg'}}"
              variant="none"
              color="blue-300" 
              size="xl"
              class="Ufocus rounded-sm group bg-blue-300/10 " 
              v-model="title" 
              placeholder="Iphone 11, Телевизор, Холодильник..,"
              required/>
          </label>
          <label class="flex flex-col gap-2 text-sm">
            <p class="after:content-['*'] after:text-red-500 text-base font-medium">
              Выберите категорию
            </p>
            <div >
              <UIListboxUI :data="categories" @update:selectedList="handleSelectedCategory"/>
            </div>
          </label>
          
          <label class="flex flex-col gap-2 text-sm" v-if="selectedCategory">
            <p class="after:content-['*'] after:text-red-500 text-base font-medium">
              Выберите тип товара 
            </p>
            <UIRadioGroupUI @update:selectedRadio="handleSelectedSubCategory" :data="selectedCategory?.subCategories"/>
          </label>

          <label class="flex flex-col gap-2 text-sm">
            <p class="after:content-['*'] after:text-red-500 text-base font-medium">
              Состояние
            </p>
            <UIRadioUI :data="productConditions" @update:radio="handleCondition"/>
          </label>

          <label class="flex flex-col gap-2 text-sm">
            <p class="after:content-['*'] after:text-red-500 text-base font-medium">
              Вид объявления
            </p>
            <UIRadioUI :data="productTypes" @update:radio="handleType"/>
          </label>
        </div>

        <template #footer>
          <label class="flex flex-col gap-2 text-sm max-w-[70%]">
            <p class="after:content-['*'] after:text-red-500 text-base font-medium">
              Описание
            </p>
            <UTextarea minlength="40" :ui="{size: 'xl'}" color="blue-500" class="rounded-md min-h-[128px] " placeholder="Опишите свой товар поподробнее..."/>
            <p class="text-orange-400 text-medium text-sm -mt-1">Не указывайте в описании телефон и e-mail — для этого есть отдельные поля</p>
          </label>
        </template>
      </UCard>

      <!-- photo section -->
      <UCard class="rounded-sm">
        <template #header>
          <h3 class="text-2xl font-medium">
            Добавьте Фотографии (max 10)
          </h3>
        </template>

        <div class="flex flex-col gap-2 text-sm ">
          <label tabindex="0" class="w-16 h-16 Ufocus cursor-pointer flex rounded-sm justify-center items-center bg-stone-300 font-medium">
            <input tabindex="-1" class="fixed left-0 top-[-100px] opacity-0" type="file" multiple @input="handleImages">
            <ion-icon name="add-sharp" style="font-size: 48px"></ion-icon>
          </label>
          <UIDraggableUI :data="selectedImages" @delete:image="handleImageDelete"/>
        </div>
      </UCard>

      <!-- meeting point section -->
      <UCard class="rounded-sm ">
        <template #header>
          <h3 class="text-2xl font-medium">
            Место встречи
          </h3>
        </template>

        <div class="flex flex-col gap-8 max-w-[70%]">
          <div class="flex flex-col gap-2 text-sm">
            <p class="after:content-['*'] after:text-red-500 text-base font-medium">
              Область 
            </p>
            <div class="flex flex-col gap-4">
              <UIListboxUI :data="regions" @update:selectedList="handleSelectedRegion"/>
            </div>
          </div>

          <label class="flex flex-col gap-2 text-sm" v-if="selectedRegion">
            <p class="after:content-['*'] after:text-red-500 text-base font-medium">
              Выберите город / этрап
            </p>
            <UIRadioGroupUI @update:selectedRadio="handleSelectedCity" :data="selectedRegion?.cities"/>
          </label>

          <div class="flex justify-between gap-4">
          <label class="flex flex-col gap-3 text-base flex-1">
            <p class=" after:content-['*'] after:text-red-500 font-medium">Уточните адрес</p>
            <UInput 
              :ui="{ variant: {none: ''}}"
              variant="none"
              color="blue-300" 
              size="xl"
              class="Ufocus rounded-sm bg-blue-300/10 flex-1" 
              v-model="title" 
              placeholder="Примеры: Улица Атамырат, дом 20., Микрорайон бахар, Автовокзал.,"
              required/>
          </label>

          <label class="flex flex-col gap-3 text-base max-w-[110px]">
            <p class=" after:content-['*'] after:text-red-500 font-medium">Номер дома</p>
            <UInput 
              :ui="{ variant: {none: ''}}" 
              variant="none"
              color="blue-300" 
              size="xl"
              class="Ufocus rounded-sm bg-blue-300/10 " 
              />
          </label>
        </div>
        </div>
      </UCard>
    </form>

  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import { categories, productConditions, productTypes, regions } from 'assets/data';
import { ICategory, IRegion } from 'assets/types';

const title = ref('')
const selectedCategory= ref<ICategory | null>(null)
const selectedSubCategory = ref<string | null >(null)
const condition = ref()
const advType = ref()

/* regions */
const selectedRegion = ref<IRegion | null>(null)
const selectedCity = ref<string | null>(null)

/* composables */
const {selectedImages, handleImages} = getImages()

const handleImageDelete = (index: string) => selectedImages.value.splice(index, 1)

const handleSelectedCategory = (payload: ICategory) => {
  selectedSubCategory.value = null
  selectedCategory.value = payload
} 

const handleSelectedSubCategory = (payload: string) => selectedSubCategory.value = payload

const handleType = (payload: string) => advType.value = payload

const handleCondition = (payload: string) => condition.value = payload

const handleSelectedRegion = (payload: IRegion) => {
  console.log(payload);
  selectedRegion.value = payload
} 

const handleSelectedCity = (payload:string) => selectedCity.value = payload

definePageMeta({
  layout: 'nav',
})
</script>