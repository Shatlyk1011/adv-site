import {
  getFirestore,
  doc,
  setDoc,
  collection,
  getDocs,
} from "firebase/firestore"
import { IAdvertisement } from "assets/types"

const { app } = useAuth()

const db = getFirestore(app!)

const firestoreError = ref(null)

const getCollection = async (coll: string) => {
  let results = []

  const docsRef = collection(db, coll)

  const querySnap = await getDocs(docsRef)

  querySnap.forEach((doc) => {
    results.push({ ...doc.data(), id: doc.id })
  })

  return results
}

const addDocument = async (coll: string, id: string, data: IAdvertisement) => {
  if (db) {
    const docRef = doc(db, coll, id)
    firestoreError.value = null
    try {
      await setDoc(docRef, data)
      console.log("new adv added")
    } catch (err: any) {
      console.log("err", err.message)
      firestoreError.value = err.message
    }
  }
}

const useFirestore = () => {
  return { addDocument, getCollection }
}

export default useFirestore
