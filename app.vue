<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { getAuth, onAuthStateChanged } from "firebase/auth"

const auth = getAuth()

onAuthStateChanged(auth, (_user) => {
  useUserStore().setUser(_user)
})

</script>
