import { User } from "firebase/auth"
interface State {
  user: null | User
  displayName: null | string
  uid: null | string | number
  userPhone: null | string | number
}

export const useUserStore = defineStore("user", {
  state: (): State => {
    return {
      user: null,
      displayName: null,
      uid: null,
      userPhone: null,
    }
  },

  actions: {
    setUser(_user: null | User) {
      console.log("settled user", _user)
      this.user = _user
      if (_user) {
        this.displayName = _user.displayName
        this.uid = _user.uid
        this.userPhone = _user.phoneNumber
      }
    },
  },
})
