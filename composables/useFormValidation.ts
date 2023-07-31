const useFormValidation = () => {
  const titleValidated = ref(false)
  const addressValidated = ref(false)
  const priceValidated = ref(false)
  const phoneValidated = ref(false)

  const titleValidation = (value: any) => {
    if (!value) {
      titleValidated.value = false
      return "Заполните загаловок"
    } else {
      return (titleValidated.value = true)
    }
  }

  const addressValidation = (value: any) => {
    if (!value) {
      addressValidated.value = false
      return "Заполните адрес"
    } else {
      return (addressValidated.value = true)
    }
  }

  const priceValidation = (value: any) => {
    if (!value) {
      priceValidated.value = false
      return "Укажите цену"
    } else {
      return (priceValidated.value = true)
    }
  }

  const phoneValidation = (value: any) => {
    if (!value) {
      phoneValidated.value = false
      return "Укажите номер"
    } else {
      return (phoneValidated.value = true)
    }
  }

  const validated = computed(
    () =>
      titleValidated.value &&
      addressValidated.value &&
      priceValidated.value &&
      phoneValidated.value
  )

  return {
    titleValidation,
    addressValidation,
    priceValidation,
    phoneValidation,
    validated,
  }
}

export default useFormValidation
