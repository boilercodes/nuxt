// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src",
  imports: { dirs: ["stores"] },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
});
