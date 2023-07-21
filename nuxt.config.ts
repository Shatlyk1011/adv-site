// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@vueuse/nuxt", "@nuxtjs/tailwindcss"],

  css: ["@/assets/scss/base.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      title: "IonIcons",
      script: [
        {
          key: "ionicons",
          src: "https://unpkg.com/ionicons@latest/dist/ionicons.js",
        },
      ],
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/scss/vars";`,
        },
      },
    },
  },
})
