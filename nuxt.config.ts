// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@vant/nuxt", "@sidebase/nuxt-session"],
  runtimeConfig: {
    jwtSecret: process.env.JWT_SECRET,
  },
});
