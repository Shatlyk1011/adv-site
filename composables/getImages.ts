const selectedImages = ref()

const handleImages = (e: Event) => {
  const files = (e.target as HTMLInputElement).files
  if (files) {
    let length = files.length
    let fileArr = Array.from(files).map((file) => {
      return {
        file,
        url: URL.createObjectURL(file),
      }
    })
    if (!selectedImages.value) {
      selectedImages.value = fileArr
    } else if (selectedImages.value) {
      selectedImages.value = [...selectedImages.value, ...fileArr]
    }
  }
}
const getImages = () => {
  return { selectedImages, handleImages }
}

export default getImages
