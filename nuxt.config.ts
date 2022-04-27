import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: "src/",
  modules: [
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
    "nuxt-windicss",
    "unplugin-icons/nuxt",
  ],
  colorMode: {
    classSuffix: "",
  },
});
