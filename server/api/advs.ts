import { firestore } from "../utils/firebase"
import { Timestamp } from "firebase/firestore"
import formatRelative from "date-fns/formatRelative"
import { ru } from "date-fns/locale"

export default defineEventHandler(async (e) => {
  const date = new Date()

  const ref = firestore.collection("advs").limit(12)
  const snap = await ref.get()
  return snap.docs.map((doc) => {
    let format = Number((doc.data().createdAt as Timestamp).toDate())
    let newFormat = formatRelative(format, date, { locale: ru })
    return { ...doc.data(), id: doc.id, createdAt: newFormat }
  })
})
