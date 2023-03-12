// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  typescript: {
    strict: true,
  },
  app: {
    head: {
      bodyAttrs: {
        class: "bg-slate-100 dark:bg-slate-800",
      },
    },
  },
});
