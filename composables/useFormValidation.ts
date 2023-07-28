const useFormValidation = () => {
  const titleValidated = ref(false)

  const conditionValidated = ref(false)
  const addressValidated = ref(false)
  const priceValidated = ref(false)
  const phoneValidated = ref(false)
  const addressNumberValidated = ref(false)

  const titleValidation = (value: any) => {
    if (!value) {
      titleValidated.value = false
      return "Заполните загаловок"
    } else {
      titleValidated.value = true
      return titleValidated.value
    }
  }

  const conditionValidation = (value: any) => {
    if (!value) {
      conditionValidated.value = false
      return "Выберите состояние"
    } else {
      conditionValidated.value = true
      return conditionValidated.value
    }
  }

  const addressValidation = (value: any) => {
    if (!value) {
      addressValidated.value = false
      return "Заполните адрес"
    } else {
      addressValidated.value = true
      return addressValidated.value
    }
  }

  const addressNumberValidation = (value: any) => {
    if (!value) {
      addressNumberValidated.value = false
      return "Укажите номер дома"
    } else {
      addressNumberValidated.value = true
      return addressNumberValidated.value
    }
  }

  const priceValidation = (value: any) => {
    if (!value) {
      priceValidated.value = false
      return "Укажите цену"
    } else {
      priceValidated.value = true
      return priceValidated.value
    }
  }

  const phoneValidation = (value: any) => {
    if (!value) {
      phoneValidated.value = false
      return "Укажите номер"
    } else {
      phoneValidated.value = true
      return phoneValidated.value
    }
  }

  const validated = computed(
    () =>
      titleValidated.value &&
      conditionValidated.value &&
      addressValidated.value &&
      priceValidated.value &&
      phoneValidated.value &&
      addressNumberValidated.value
  )

  return {
    titleValidation,
    conditionValidation,
    addressValidation,
    addressNumberValidation,
    priceValidation,
    phoneValidation,
    validated,
  }
}

export default useFormValidation
