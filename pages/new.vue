<template>
  <div class="px-20 box-border py-10 ">
    <h1 class="text-4xl font-bold tracking-tight">Создать обявление</h1>
    <VeeForm @submit="handleAdvSubmit" class="flex flex-col mt-6 gap-4">
      <!-- description section -->
      <UCard class="rounded-sm">
        <template #header>
          <h3 class="text-2xl font-medium">Опишите в подробностях ваш товар
          </h3>
        </template>
        <div class="flex flex-col gap-8 min-h-[300px] max-w-[70%]">
          <SharedLabel title="Укажите название">
            <VeeField name="input" as="UInput" type="text" :rules="titleValidation">
              <UInput 
                :ui="{ variant: {none: ''}, size: {xl: 'text-lg'}}"
                variant="none"
                color="blue-300" 
                size="xl"
                class="Ufocus rounded-sm group bg-blue-300/10 focus:required:invalid:bg-red-300/20" 
                v-model="title" 
                placeholder="Iphone 11, Телевизор, Холодильник..,"
                />
            </VeeField>
            <div class="warning">
              <VeeErrorMessage name="input"/>
            </div>
          </SharedLabel>

          <SharedLabel title="Выберите категорию">
            <UIListboxUI :data="categories" @update:selectedList="handleSelectedCategory"/>
            <div class="warning" v-if="!selectedCategory?.title && count">Пожалуйста выберите категорию</div>
          </SharedLabel>
          
          <SharedLabel title="Выберите тип товара" v-if="selectedCategory">
            <UIRadioGroupUI @update:selectedRadio="handleSelectedSubCategory" :data="selectedCategory?.subCategories"/>
            <p class="warning" v-if="selectedCategory && !selectedSubCategory && count">Выберите подкатегорию</p>
          </SharedLabel>
 
          <SharedLabel title="Состояние">
            <UIRadioUI :data="productConditions" @update:radio="handleCondition"/>
            <p class="warning" v-if="!condition && count">Выберите состояние</p>
          </SharedLabel>

          <SharedLabel title="Вид объявления">
            <UIRadioUI :data="productTypes" @update:radio="handleType"/>
            <p class="warning" v-if="!advType && count">Выберите вид объявления</p>
          </SharedLabel>
        </div>

        <template #footer>
          <SharedLabel title="Описание">
            <UTextarea minlength="20" v-model.trim="description" :ui="{size: 'xl'}" color="blue-500" class="rounded-md min-h-[128px]" placeholder="Опишите свой товар поподробнее..."/>
            <p class="text-stone-400 text-medium text-sm -mt-1">Не указывайте в описании телефон и e-mail — для этого есть отдельные поля</p>
            <p class="warning" 
              v-if="count && description.length < 20">
              Опишите ваше объявление - осталось <span class="font-bold text-base">{{ 20 - description.length  }}</span> символов
            </p>
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
            <p class="warning" v-if="!selectedRegion && count">Выберите область</p>
          </SharedLabel>

          <SharedLabel title="Выберите город / этрап" v-if="selectedRegion">
            <UIRadioGroupUI @update:selectedRadio="handleSelectedCity" :data="selectedRegion?.cities"/>
            <p class="warning" v-if="selectedRegion && !selectedCity && count">Выберите город/этрап</p>
          </SharedLabel>

          <div class="flex justify-between gap-4">
            <SharedLabel title="Уточните адрес" class="flex-1">
              <VeeField name="address" as="UInput" type="text" :rules="addressValidation">
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
              </VeeField>
              <VeeErrorMessage class="warning" name="address"/>
            </SharedLabel>

            <SharedLabel title="Номер дома" class="max-w-[110px]" >
              <VeeField name="addressNumber" as="UInput" type="text" :rules="addressNumberValidation">
                <UInput
                  maxlength="6"
                  :ui="{ variant: {none: ''}}" 
                  variant="none"
                  v-model="addressNumber"
                  color="blue-300" 
                  size="xl"
                  class="Ufocus rounded-sm bg-blue-300/10 " 
                />
              </VeeField>
              <VeeErrorMessage class=warning name="addressNumber"/>
            </SharedLabel>
          </div>
        </div>
      </UCard>

      <UCard class="rounded-sm">
        <template #header>
          <h3 class="text-2xl font-medium">Цена и контакты</h3>
        </template>

        <div class="flex flex-col gap-8 min-h-[300px] max-w-[70%]">
          <SharedLabel title="Цена">
            <div class="flex gap-1 items-stretch">
              <VeeField name="price" as="UInput" type="number" :rules="priceValidation">
                <UInput 
                  type="number"
                  maxlength="20"
                  :ui="{ variant: {none: ''}, wrapper: 'relative h-full'}"
                  variant="none"
                  color="blue-300" 
                  class="Ufocus rounded-sm bg-blue-300/10 max-w-[110px] h-full" 
                  v-model="price"
                  required/>
              </VeeField>
              <UIListboxUI 
                :data="[{title: 'TMT'}, {title: 'USD($)'}]"
                base="TMT"
                class="h-full min-w-[110px]" 
                @update:selectedList="handleSelectedCurrency"
                />
            </div>
            <VeeErrorMessage class="warning" name="price"/>
          </SharedLabel>

          <SharedLabel title="Телефон для контакта">
            <VeeField name="phone" as="UInput" :rules="phoneValidation">
              <UInput 
                minlength="8"
                maxlength="12"
                type="nubmer"
                :ui="{ variant: {none: ''}}"
                variant="none"
                color="blue-300" 
                size="xl"
                class="Ufocus rounded-sm bg-blue-300/10 max-w-[150px]" 
                v-model="phoneNumber" 
                placeholder="+993 6410. . ."
                required/>
            </VeeField>
            <VeeErrorMessage class="warning" name="phone"/>
          </SharedLabel>

          <SharedLabel title="Возможна ли доставка?">
            <UToggle color="green" v-model="delivery" class=""/>
          </SharedLabel>

          <SharedLabel title="Способ связи">
            <URadio v-for="contact of contactOptions" :key="contact.name" v-model="communication" v-bind="contact" />
            <p class="warning" v-if="!communication && count">Выберите желаемый способ связи</p>
          </SharedLabel>
        </div>
      </UCard>
      <UButton type="submit" color="blue" label="submit"/>
  </VeeForm>

  </div>
</template>

<script setup lang="ts">
import { nanoid } from 'nanoid'; 
import { categories, productConditions, productTypes, regions, contactOptions } from 'assets/data';
import { ICategory, IRegion, IImage, IAdvertisement } from 'assets/types';
import { Timestamp } from 'firebase/firestore';

definePageMeta({
  layout: 'nav',
})
let count = ref(0)
const userUid = useUserStore().uid
const displayName = useUserStore().displayName

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
const communication = ref()

const advId = nanoid(15)

/* composables */
const { selectedImages, handleImages } = getImages()
const {addDocument} = useFirestore()

const { uploadImages, images } = useFirebaseStorage()

const { titleValidation, addressValidation, priceValidation, phoneValidation, addressNumberValidation, validated } = useFormValidation()
/*  */

const selectedImageFiles = computed(() => {
  if(selectedImages.value) return selectedImages.value.map((i: IImage) => i.file)
  return
})

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

const isFormValid = (): boolean => {
  return validated.value && selectedCategory.value && selectedSubCategory.value && condition.value && advType.value && description.value.length > 20 && selectedRegion.value && selectedCity.value && communication.value
}
const handleAdvSubmit = async () => {
  console.log('folderRef 1', images);
  count.value++
  //form validation
  if(isFormValid()) {
    let newAdv:IAdvertisement = {
      title: title.value,
      category: selectedCategory.value!.title,
      subCategory: selectedSubCategory.value!,
      condition: condition.value,
      advType: advType.value,
      description: description.value,
      createdAt: Timestamp.fromDate(new Date()),
      price: price.value,
      currency: currency.value,
      delivery: delivery.value,
      communication: communication.value!,
      images: selectedImageFiles.value ?  images : null,

      appointment: {
        region: selectedRegion.value!.title,
        city: selectedCity.value!,
        address: address.value,
        addressNumber: addressNumber.value
      },

      userInfo : {
        uid: userUid!,
        userName: displayName!,
        phone: phoneNumber.value,
        
      }

    }
    if(selectedImageFiles.value) {
      await uploadImages(selectedImageFiles.value, advId)
    }
    await addDocument('advs', advId, newAdv)
  } else {
    console.log('warning заполните все');
  }
}
</script>