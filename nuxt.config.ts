// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@vueuse/nuxt", "@nuxtjs/tailwindcss", "nuxt-headlessui"],

  css: ["@/assets/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      title: "Ahio",
      script: [
        {
          key: "ionicons",
          src: "https://unpkg.com/ionicons@latest/dist/ionicons.js",
        },
      ],
    },
  },
  vite: {},
})
