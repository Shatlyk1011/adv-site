import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage"
const { app } = useAuth()

const storage = getStorage(app)

const uploadImages = (files: Array<File>, advId: string) => {
  files.map((file) => {
    const user = useUserStore().user
    const userId = user?.uid

    let storageRef = ref(
      storage,
      `users/${user!.displayName! + userId!}/${advId}/${file.name}`
    )

    console.log("storageRef", storageRef)

    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log("Upload is " + progress + "% done")
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused")
            break
          case "running":
            console.log("Upload is running")
            break
        }
      },
      (error) => {
        switch (error.code) {
          case "storage/unauthorized":
            break
          case "storage/canceled":
            break
          case "storage/unknown":
            break
        }
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL)
        })
      }
    )
  })
}

const useFirebaseStorage = () => {
  return { storage, uploadImages }
}

export default useFirebaseStorage
