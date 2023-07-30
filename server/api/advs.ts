import { firestore } from "../utils/firebase"

export default defineEventHandler(async (e) => {
  const ref = firestore.collection("advs")
  const snap = await ref.get()
  return snap.docs.map((doc) => doc.data())
})
