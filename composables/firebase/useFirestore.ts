import { doc, setDoc, collection, getDocs, getDoc } from "firebase/firestore"
import { IAdvertisement } from "assets/types"

const { firestore } = useFirebase()
const document = ref<IAdvertisement>()

const firestoreError = ref(null)

const getCollection = async (coll: string) => {
  let results: IAdvertisement[] /* !! */ = []

  const docsRef = collection(firestore, coll)

  const querySnap = await getDocs(docsRef)

  querySnap.forEach((doc) => {
    results.push({ ...(doc.data() as IAdvertisement), id: doc.id })
  })

  return results
}

const getDocument = async (coll: string, id: string) => {
  const docRef = doc(firestore, coll, id)

  try {
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      document.value = docSnap.data() as IAdvertisement
    }
  } catch (err) {
    console.log("err", err)
  }
}

const addDocument = async (coll: string, id: string, data: IAdvertisement) => {
  if (firestore) {
    const docRef = doc(firestore, coll, id)
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
  return { addDocument, getCollection, getDocument, document }
}

export default useFirestore
