// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@vueuse/nuxt",
    "nuxt-headlessui",
    "@nuxthq/ui",
    "@pinia/nuxt",
    "@nuxt/image",
  ],

  colorMode: {
    preference: "light",
  },
  ui: {
    safelistColors: ["blue-800", "rounded-sm"],
  },
  imports: {
    dirs: ["./stores"],
  },

  pinia: {
    autoImports: ["defineStore"],
  },

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
          key: "ionicons-1",
          type: "module",
          src: "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js",
        },
        {
          key: "ionicons-2",
          nomodule: "",
          src: "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js",
        },
      ],
    },
  },

  headlessui: {
    prefix: "",
  },
  vite: {},
})