import { ref as strRef, uploadBytes, getDownloadURL } from "firebase/storage"
import { Images } from "@/assets/types"

const { storage } = useFirebase()

const storageError = ref()

const images: Images = reactive({
  urls: [],
  storageFolderPath: "",
})

const uploadImages = async (files: Array<File>, advId: string) => {
  const user = useUserStore().user
  const userId = user?.uid

  images.storageFolderPath = `users/${user!.displayName! + userId!}/${advId}}`

  for (let file of files) {
    const imageRef = `users/${user!.displayName! + userId!}/${advId}/${
      file.name
    }`
    let storageRef = strRef(storage, imageRef)

    try {
      await uploadBytes(storageRef, file)
      const url = await getDownloadURL(storageRef)
      console.log("dowurl", url)
      if (!images.urls.some((image) => image.url === url)) {
        images.urls.push({ url, storagePath: imageRef })
      }
    } catch (err: any) {
      storageError.value = err.message
    }
  }
}

const useFirebaseStorage = () => {
  return { storage, uploadImages, images }
}

export default useFirebaseStorage
