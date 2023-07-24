<template>
  <div class="px-20 box-border mt-6 h-screen">
    <h1 class="text-4xl font-bold tracking-tight">Создать обявление</h1>

    <div class="flex flex-col mt-6 gap-6">
      <UCard class="rounded-sm">
        <template #header>
          <h3 class="text-2xl font-medium">
            Опишите в подробностях ваш товар
          </h3>

          <p class="text-xs font-bold mt-1 ">
            <span class="text-red-500">*</span> - обязательные
          </p>
        </template>
        <!-- body -->
        <div class="flex flex-col gap-5 min-h-[300px]">
          <label class="flex flex-col gap-3 text-base">
            <p class="after:content-['*'] after:text-red-500 font-medium">Укажите название </p>
            <UInput 
              :ui="{variant: {none: ''}, size: {xl: 'text-lg'}}"
              variant="none"
              color="blue-300" 
              size="xl"
              class="Ufocus rounded-sm bg-blue-300/20" 
              v-model="title" 
              placeholder="Iphone 11, Телевизор, Холодильник..,"
              required/>
          </label>

          <label class="flex flex-col gap-2 text-sm">
            <p class="after:content-['*'] after:text-red-500 text-base font-medium">
              Выберите категорию
            </p>
            <div class="flex flex-col gap-4">
              <UIListboxUI :data="categories" @update:selectedList="handleSelectedCategory"/>
            </div>
          </label>
          
          <label class="flex flex-col gap-2 text-sm" v-if="selectedCategory">
            <p class="after:content-['*'] after:text-red-500 text-base font-medium">
              Выберите тип товара 
            </p>
            <UIRadioGroupUI  @update:selectedRadio="handleSelectedRadio" :data="selectedCategory?.subCategories"/>
          </label>
          <label class="flex flex-col gap-2 text-sm">
            <p class="after:content-['*'] after:text-red-500 text-base font-medium">
              Вид объявления
            </p>
            <UIRadioUI :data="productType" @update:radio="handleType"/>
          </label>
        </div>

        <template #footer>
          <label class="flex flex-col gap-2 text-sm">
            <p class="after:content-['*'] after:text-red-500 text-base font-medium">
              Состояние
            </p>
            <UIRadioUI :data="productCondition" @update:radio="handleCondition"/>
          </label>
        </template>
      </UCard>

      <UCard class="rounded-sm">
        <template #header>
          <h3 class="text-2xl font-medium">
            Добавьте Фотографии (max 10)
          </h3>
        </template>

        <div class="flex flex-col gap-2 text-sm ">
          <label class="w-16 h-16 cursor-pointer flex rounded-sm justify-center items-center bg-stone-300 font-medium">
            <input class="fixed left-0 top-[-100px] opacity-0" type="file" multiple @input="handleImages">
            <ion-icon name="add-sharp" style="font-size: 48px"></ion-icon>
          </label>
          <UIDraggableUI :data="selectedImages" @delete:image="handleImageDelete"/>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { categories, productCondition, productType } from 'assets/data';
import { ICategory } from 'assets/types';

const title = ref('')
const selectedCategory= ref<ICategory | null>(null)
const selectedSubCategory = ref('')
const condition = ref()
const typeee = ref()

const {selectedImages, handleImages} = getImages()

const handleImageDelete = (index: string) => selectedImages.value.splice(index, 1)

const handleSelectedCategory = (payload: ICategory) => selectedCategory.value = payload

const handleSelectedRadio = (payload: string) => selectedSubCategory.value = payload

const handleType = (payload) => {
  console.log('payload', payload);
  typeee.value = payload
}

const handleCondition = (payload: string) => {
  console.log('payload', payload);
  condition.value = payload
}

definePageMeta({
  layout: 'nav',
})
</script>