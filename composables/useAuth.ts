import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth"
import { signOut, getAuth } from "firebase/auth"

const app = useFirebase()

const auth = getAuth()

const authError = ref()
const isPending = ref()

onAuthStateChanged(auth, (_user) => {
  useUserStore().setUser(_user)
})

const register = async (
  email: string,
  password: string,
  displayName: string
) => {
  try {
    authError.value = null
    isPending.value = true
    const res = await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(res.user, { displayName })
  } catch (err: any) {}
  isPending.value = false
}

const login = async (email: string, password: string) => {
  try {
    isPending.value = true
    authError.value = null
    await signInWithEmailAndPassword(auth, email, password)
  } catch (err: any) {
    if (err.code === "auth/wrong-password") {
      authError.value = "Неверный пароль. Поробуйте еще раз."
    } else if (err.code === "auth/user-not-found") {
      authError.value = "Такого пользователя не существует."
    } else if (err.code === "auth/invalid-email") {
      authError.value = "Такого email не существует"
    } else if (err.code === "auth/network-request-failed") {
      authError.value = "Неполадки с интернетом..."
    } else {
      authError.value = "Что то пошло не так..."
    }
    isPending.value = false
  }
  isPending.value = false
}

const logout = async () => {
  try {
    await signOut(auth)
  } catch (err: any) {
    authError.value = err.message
  }
}

const useAuth = () => {
  return { app, authError, isPending, register, login, logout }
}

export default useAuth
