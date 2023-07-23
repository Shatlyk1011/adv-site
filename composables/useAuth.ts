import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { signOut, getAuth } from "firebase/auth"

const authError = ref()
const isPending = ref()

const login = async (email: string, password: string, displayName: string) => {
  const auth = getAuth()

  try {
    authError.value = null
    isPending.value = true
    const res = await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(res.user, { displayName })
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
  const auth = getAuth()
  console.log("auth", auth)
  try {
    console.log("SIGNING OUT")
    await signOut(auth)
  } catch (err: any) {
    authError.value = err.message
  }
}

const useAuth = () => {
  return { authError, isPending, login, logout }
}

export default useAuth
