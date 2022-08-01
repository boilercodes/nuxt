import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: "src/",
  buildModules: ["@pinia/nuxt", "@vueuse/nuxt"],
  modules: ["@nuxtjs/color-mode", "@nuxtjs/tailwindcss"],

  colorMode: { classSuffix: "" },
  tailwindcss: { cssPath: "~/assets/css/main.scss" },
});
