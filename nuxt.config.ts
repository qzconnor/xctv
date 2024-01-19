// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    'nuxt-icons',
    '@vueuse/nuxt',
    "nuxt-multi-cache"
  ],
  multiCache: {
    data: {
      enabled: true
    }
  },
  runtimeConfig: {
    public: {
      DISCORD_USER_ID: "299976373353578496",
      GITHUB_USER_NAME: "qzconnor"
    }
  },
  app: {
    pageTransition: {
      name: 'fade',
      mode: 'out-in' // default
    }
  },
  // router: {
  //   options: {
  //     linkExactActiveClass: "underline"
  //   }
  // },
  colorMode: {
    classSuffix: ''
  },
  googleFonts: {
    families: {
      Inter: [400, 700]
    }
  }
})