import {
  getStorage,
  ref as strRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage"

import { IAdvImage } from "@/assets/types"

type Images = {
  urls: IAdvImage[]
  storageFolderPath: string
}

const { app } = useAuth()

const storage = getStorage(app)

const storageError = ref()

const images: Images = reactive({
  urls: [],
  storageFolderPath: "",
})

const uploadImages = async (files: Array<File>, advId: string) => {
  const user = useUserStore().user
  const userId = user?.uid

  images.storageFolderPath = `users/${user!.displayName! + userId!}/${advId}}`

  let random = () => Math.floor(Math.random() * 100)

  for (let file of files) {
    let ran = random()
    const imageRef = `users/${user!.displayName! + userId!}/${advId}/${
      file.name + ran
    }`
    let storageRef = strRef(storage, imageRef)

    try {
      console.log(`called ${file.name}`)
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
