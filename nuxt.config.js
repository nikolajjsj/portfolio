export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  generate: {
    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true }).only(['path']).fetch()

      return files.map((file) => (file.path === '/index' ? '/' : file.path))
    },
  },

  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        const { text } = require('reading-time')(document.text)

        document.readingTime = text
      }
    },
  },

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
    '@nuxt/content',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    liveEdit: false,
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-night-owl.css',
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
