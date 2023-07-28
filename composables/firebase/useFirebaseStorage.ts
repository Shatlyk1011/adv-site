import {
  getStorage,
  ref as strRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage"

import { IAdvImage } from "@/assets/types"
const { app } = useAuth()

const storage = getStorage(app)

const storageError = ref()
const folderRef = ref()
const imageUrls = ref<IAdvImage[]>([])

const uploadImages = async (files: Array<File>, advId: string) => {
  const user = useUserStore().user
  const userId = user?.uid

  folderRef.value = `users/${user!.displayName! + userId!}/${advId}}`

  for (let file of files) {
    const imageRef = `users/${user!.displayName! + userId!}/${advId}/${
      file.name
    }`
    let storageRef = strRef(storage, imageRef)

    try {
      const res = await uploadBytes(storageRef, file)
      const url = await getDownloadURL(storageRef)
      console.log("dowurl", url)
      imageUrls.value.push({ url, storagePath: imageRef })
    } catch (err: any) {
      storageError.value = err.message
    }
  }
}

const useFirebaseStorage = () => {
  return { storage, uploadImages, imageUrls, folderRef }
}

export default useFirebaseStorage
