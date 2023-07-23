import { initializeApp, getApps } from "firebase/app"

const config = {
  apiKey: "AIzaSyCvrVDFB36hhcTLZVXktkfplGRtWHx2rdw",
  authDomain: "adv-project-747bb.firebaseapp.com",
  projectId: "adv-project-747bb",
  storageBucket: "adv-project-747bb.appspot.com",
  messagingSenderId: "660244422582",
  appId: "1:660244422582:web:0d006180a1b448021b2b17",
  measurementId: "G-GJSTG2394E",
}

export default function useFirebase() {
  if (getApps().length == 0) {
    const app = initializeApp(config)
    return { app }
  }
}
