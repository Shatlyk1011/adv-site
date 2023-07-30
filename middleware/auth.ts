export default defineNuxtRouteMiddleware((to) => {
  const user = useUserStore().user
  if (!user) {
    console.log("redirected to /")
    useState("regSide", () => true)
    return "/"
  }
})
