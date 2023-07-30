<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { onAuthStateChanged } from "firebase/auth"

onMounted( async () => {
  const { auth } = useFirebase()
  onAuthStateChanged(auth, (_user) => {
    useUserStore().setUser(_user)
  })
})

</script>
