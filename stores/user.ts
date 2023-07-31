import { User } from "firebase/auth"
interface State {
  user: null | User
  displayName: null | string
  uid: null | string
  userPhone: null | string
  registeredAt: null | string
}

export const useUserStore = defineStore("user", {
  state: (): State => {
    return {
      user: null,
      displayName: null,
      uid: null,
      userPhone: null,
      registeredAt: null,
    }
  },

  actions: {
    setUser(_user: null | User) {
      console.log("settled user", _user)
      this.user = _user
      if (_user) {
        this.registeredAt = _user.metadata.creationTime || null
        this.displayName = _user.displayName
        this.uid = _user.uid
        this.userPhone = _user.phoneNumber
      }
    },
  },
})
