// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src",
  imports: { dirs: ["stores"] },
  modules: ["@nuxtjs/i18n", "@nuxtjs/tailwindcss", "@pinia/nuxt", "@vueuse/nuxt"],

  i18n: {
    detectBrowserLanguage: { cookieKey: "locale" },
    langDir: "assets/locales",
    defaultLocale: "en",
    locales: [{ code: "en", iso: "en-US", name: "English", file: "en.json" }],
  },
});
