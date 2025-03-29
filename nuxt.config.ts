// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "@formkit/auto-animate/nuxt",
    "@sidebase/nuxt-auth",
    "@pinia/nuxt",
  ],

  auth: {
    baseURL: process.env.BASE_URL,
    provider: {
      type: "local",
      endpoints: {
        signIn: { path: "/admin/login", method: "post" },
        signOut: false,
        signUp: { path: "/admin/store", method: "post" },
        getSession: { path: "/admin", method: "get" },
        // refresh: { path: '/refresh', method: 'post' },
      },
      token: {
        signInResponseTokenPointer: "/response/token",
        maxAgeInSeconds: 34560000, // 400 days, the maximum allowed by the browser
      },
    },
  },
  i18n: {
    locales: [
      {
        code: "ar",
        iso: "ar-SA",
        name: "Arabic",
        files: ["ar.yaml", "yup-ar.yaml"],
        dir: "rtl",
        symbol: "ع",
      },
      {
        code: "en",
        iso: "en-US",
        name: "English",
        files: ["en.yaml", "yup-en.yaml"],
        dir: "ltr",
        symbol: "EN",
      },
    ],
    langDir: "./",
    defaultLocale: "en",
    detectBrowserLanguage: false,
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/css/app.css", "~/assets/css/style.css"],
  runtimeConfig: {
    public: {
      baseURL: process.env.VUE_APP_API_URL || "https://api.example.com/",
      baseURL_V2: process.env.VUE_APP_API_V2_URL || "https://api.example.com/",
      envMode: process.env.envMode || "production",
    },
  },
});
