export default defineNuxtRouteMiddleware((to) => {
  const user = useUserStore().user
  if (!user) {
    useState("regSide", () => true);
    return "/";
  }
})
