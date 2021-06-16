export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nikolaj Jensen',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no"',
      },
      {
        name: 'keyword',
        content: 'portfolio, javascript, developer, flutter, python, web, app',
      },
      {
        name: 'description',
        content: 'Portfolio website made by Nikolaj Jensen',
      },
      { property: 'og:title', content: 'Nikolaj Jensen | Software Developer' },
      {
        property: 'og:description',
        content: 'JavaScript wizard, chaotic good',
      },
      {
        property: 'og:image',
        content: 'https://www.nikolajjsj.com/headshot.jpg',
      },
      { property: 'og:url', content: 'https://nikolajjsj.com' },
      { property: 'og:type', content: 'website' },
    ],
    link: [],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/color-mode',
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
  ],

  colorMode: {
    preference: 'light', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    storageKey: 'nuxt-color-mode',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
