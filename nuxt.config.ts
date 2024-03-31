// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/css/style.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/sanity"],
  sanity: {
    projectId: 'eappmj9d',
    apiVersion: '2021-10-18'
  },
});
