<template>
  <div class="px-20 box-border py-10 ">
    <h1 class="text-4xl font-bold tracking-tight">Создать обявление</h1>
    <button class="bg-blue-500 p-4 text-white" @click="checkrefs">check refs</button>
    <button class="bg-blue-500 p-4 text-white" @click="handleUploadImg">uplaod</button>
    <form class="flex flex-col mt-6 gap-4">
      <!-- description section -->
      <UCard class="rounded-sm">
        <template #header>
          <h3 class="text-2xl font-medium">Опишите в подробностях ваш товар</h3>

          <p class="text-xs font-bold mt-1 ">
            <span class="text-red-500">*</span> - обязательные поля
          </p>
        </template>

        <div class="flex flex-col gap-8 min-h-[300px] max-w-[70%]">
          <SharedLabel title="Укажите название">
            <UInput 
              :ui="{ variant: {none: ''}, size: {xl: 'text-lg'}}"
              variant="none"
              color="blue-300" 
              size="xl"
              class="Ufocus rounded-sm group bg-blue-300/10 " 
              v-model="title" 
              placeholder="Iphone 11, Телевизор, Холодильник..,"
              required/>
          </SharedLabel>

          <SharedLabel title="Выберите категорию">
            <UIListboxUI :data="categories" @update:selectedList="handleSelectedCategory"/>
          </SharedLabel>
          
          <SharedLabel title="Выберите тип товара" v-if="selectedCategory">
            <UIRadioGroupUI @update:selectedRadio="handleSelectedSubCategory" :data="selectedCategory?.subCategories"/>
          </SharedLabel>
 
          <SharedLabel title="Состояние">
            <UIRadioUI :data="productConditions" @update:radio="handleCondition"/>
          </SharedLabel>

          <SharedLabel title="Вид объявления">
            <UIRadioUI :data="productTypes" @update:radio="handleType"/>
          </SharedLabel>
        </div>

        <template #footer>
          <SharedLabel title="Описание">
            <UTextarea minlength="40" v-model="description" :ui="{size: 'xl'}" color="blue-500" class="rounded-md min-h-[128px]" placeholder="Опишите свой товар поподробнее..."/>
            <p class="text-stone-400 text-medium text-sm -mt-1">Не указывайте в описании телефон и e-mail — для этого есть отдельные поля</p>
          </SharedLabel>
        </template>
      </UCard>

      <!-- photo section -->
      <UCard class="rounded-sm">
        <template #header>
          <h3 class="text-2xl font-medium">Добавьте Фотографии (max 10)</h3>
        </template>

        <div class="flex flex-col gap-2 text-sm ">
          <label tabindex="0" class="w-16 h-16 Ufocus cursor-pointer flex rounded-sm justify-center items-center bg-stone-300 font-medium">
            <input tabindex="-1" class="fixed left-0 top-[-100px] opacity-0" type="file" multiple @input="handleImages">
            <ion-icon name="add-sharp" style="font-size: 48px"></ion-icon>
          </label>
          <UIDraggableUI :data="selectedImages" @delete:image="handleImageDelete"/>
        </div>
      </UCard>

      <!-- meeting area section -->
      <UCard class="rounded-sm ">
        <template #header><h3 class="text-2xl font-medium">Место встречи</h3></template>

        <div class="flex flex-col gap-8 max-w-[70%]">
          <SharedLabel title="Область" :class="{'mb-20': !selectedRegion}">
            <UIListboxUI :data="regions" @update:selectedList="handleSelectedRegion"/>
          </SharedLabel>

          <SharedLabel title="Выберите город / этрап" v-if="selectedRegion">
            <UIRadioGroupUI @update:selectedRadio="handleSelectedCity" :data="selectedRegion?.cities"/>
          </SharedLabel>

          <div class="flex justify-between gap-4">
            <SharedLabel title="Уточните адрес" class="flex-1">
              <UInput 
                maxlength="30"
                :ui="{ variant: {none: ''}}"
                variant="none"
                color="blue-300" 
                size="xl"
                class="Ufocus rounded-sm bg-blue-300/10 " 
                v-model="address" 
                placeholder="Примеры: Улица Атамырат, дом 20., Микрорайон бахар, Автовокзал.,"
                required/>
            </SharedLabel>

            <SharedLabel title="Номер дома" class="max-w-[110px]" >
              <UInput 
                maxlength="6"
                :ui="{ variant: {none: ''}}" 
                variant="none"
                v-model="addressNumber"
                color="blue-300" 
                size="xl"
                class="Ufocus rounded-sm bg-blue-300/10 " 
              />
            </SharedLabel>
          </div>
        </div>
      </UCard>

      <UCard>
        <template #header>
          <h3 class="text-2xl font-medium">Цена и контакты</h3>
        </template>

        <div class="flex flex-col gap-8 min-h-[300px] max-w-[70%]">
          <SharedLabel title="Телефон для контакта">
            <UInput 
                minlength="8"
                maxlength="13"
                type="nubmer"
                :ui="{ variant: {none: ''}}"
                variant="none"
                color="blue-300" 
                size="xl"
                class="Ufocus rounded-sm bg-blue-300/10 max-w-[150px]" 
                v-model="phoneNumber" 
                placeholder="+993 6410..."
                required/>
          </SharedLabel>

          <SharedLabel title="Цена">
            <div class="flex gap-1">
              <UInput 
                maxlength="16"
                :ui="{ variant: {none: ''}}"
                variant="none"
                color="blue-300" 
                class="Ufocus rounded-sm bg-blue-300/10 max-w-[110px] h-full" 
                v-model="price" 
                required/>
              <UIListboxUI 
                :data="[{title: 'TMT'}, {title: 'USD($)'}]"
                base="TMT"
                class="h-full min-w-[110px]" 
                @update:selectedList="handleSelectedCurrency"/>
            </div>
          </SharedLabel>

          <SharedLabel title="Возможна ли доставка?">
            <UToggle color="green" v-model="delivery" class=""/>
          </SharedLabel>

          <SharedLabel title="Способ связи">
            <URadio v-for="contact of contactOptions" :key="contact.name" v-model="communication" v-bind="contact" />
          </SharedLabel>
        </div>
      </UCard>
    </form>

  </div>
</template>

<script setup lang="ts">
import { nanoid } from 'nanoid'; 
import { categories, productConditions, productTypes, regions, contactOptions } from 'assets/data';
import { ICategory, IRegion, IImage } from 'assets/types';

const title = ref('')
const selectedCategory= ref<ICategory | null>(null)
const selectedSubCategory = ref<string | null >(null)
const condition = ref()
const advType = ref()
const description = ref('')

const selectedRegion = ref<IRegion | null>(null)
const selectedCity = ref<string | null>(null)
const address = ref('')
const addressNumber = ref('')

const phoneNumber = ref('')
const price = ref('')
const currency = ref('TMT')

const delivery = ref(false)
const communication = ref<boolean>()

const advId = nanoid(6)

/* composables */
const { selectedImages, handleImages } = getImages()

const selectedImageFiles = computed(() => {
  if(selectedImages.value) return selectedImages.value.map((i: IImage) => i.file)
  return
})
const { uploadImages } = useFirebaseStorage()



const handleUploadImg = () => {
  uploadImages(selectedImageFiles.value, advId)
}
const handleImageDelete = (index: string) => selectedImages.value.splice(index, 1)
  
const handleSelectedCategory = (payload: ICategory) => {
  selectedSubCategory.value = null
  selectedCategory.value = payload
} 
const handleSelectedSubCategory = (payload: string) => selectedSubCategory.value = payload

const handleType = (payload: string) => advType.value = payload

const handleCondition = (payload: string) => condition.value = payload

const handleSelectedRegion = (payload: IRegion) => selectedRegion.value = payload

const handleSelectedCity = (payload:string) => selectedCity.value = payload

const handleSelectedCurrency = (payload: string) => currency.value = payload


definePageMeta({
  layout: 'nav',
})

const checkrefs = () => {
  let content = {
    title: title.value,
    category: selectedCategory.value?.title,
    subCategory: selectedSubCategory.value,
    condition: condition.value,
    advType: advType.value,
    description: description.value,

    meetingArea: {
      region: selectedRegion.value?.title,
      city: selectedCity.value,
      address: address.value,
      addressNumber: addressNumber.value,
    },

    info: {
      phoneNumber: phoneNumber.value,
      price: price.value,
      currency: currency.value,
      delivery: delivery.value,
      communication: communication.value
    }
  }
  console.dir(content);
}

watch(selectedImageFiles, () => console.log(selectedImageFiles.value))
</script>