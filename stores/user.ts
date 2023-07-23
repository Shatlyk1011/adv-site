import { onAuthStateChanged, getAuth, User } from "firebase/auth"

interface State {
  user: null | User
}

export const useUserStore = defineStore("user", {
  state: (): State => {
    return {
      user: null,
    }
  },

  actions: {
    setUser() {
      useFirebase()
      const auth = getAuth()
      onAuthStateChanged(auth, (_user) => {
        console.log("current store user", _user)
        if (_user) {
          this.user = _user
        } else {
          console.log("no user")
        }
      })
    },
  },
})
