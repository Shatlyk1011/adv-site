import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"

const config = {
  apiKey: "AIzaSyCvrVDFB36hhcTLZVXktkfplGRtWHx2rdw",
  authDomain: "adv-project-747bb.firebaseapp.com",
  projectId: "adv-project-747bb",
  storageBucket: "adv-project-747bb.appspot.com",
  messagingSenderId: "660244422582",
  appId: "1:660244422582:web:0d006180a1b448021b2b17",
  measurementId: "G-GJSTG2394E",
}

export const useFirebase = () => {
  const app = initializeApp(config)
  const firestore = getFirestore(app)
  const auth = getAuth(app)
  const storage = getStorage(app)

  return { app, firestore, auth, storage }
}
