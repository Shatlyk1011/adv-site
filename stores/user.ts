import { User } from "firebase/auth"
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
    setUser(_user: null | User) {
      console.log("settled user", _user)
      this.user = _user
    },
  },
})
