// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },

  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      titleTemplate: "%s",
      title: "BlueBird Millcreek",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "google-site-verification",
          content: "BTgEbTcrtVjzcLS6yPn0v72XN3vgkcc-uQE561lEN_E",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      "@tailwindcss/postcss": {},
      autoprefixer: {},
    },
  },

  modules: [
    "@pinia/nuxt",
    [
      "@nuxt/image",
      {
        screens: {
          xs: 400,
          sm: 600,
          md: 768,
          lg: 1024,
          xl: 1280,
          xxl: 1536,
          "2xl": 1536,
        },
      },
    ],
    "@nuxt/ui",
    [
      "@nuxt/icon",
      {
        collections: ["lucide"],
      },
    ],
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Roboto+Serif": [400, 500, 600],
          Roboto: [400, 500, 600, 700],
        },
      },
    ],
  ],
  ui: {
    fonts: false,
    colorMode: false,
  },
});
