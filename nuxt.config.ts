import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: { shim: false },
  experimental: { reactivityTransform: true },

  modules: ['@vueuse/nuxt', '@unocss/nuxt', 'nuxt-icon'],
  unocss: { preflight: true },
})
