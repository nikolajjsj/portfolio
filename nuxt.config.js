export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nikolaj Jensen',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no"' },
      { name: 'keyword', content: 'portfolio, javascript, developer, flutter, python, web, app' },
      { name: 'description', content: 'Portfolio website made by Nikolaj Jensen' },
      { property: 'og:title', content: 'Nikolaj Jensen | Software Developer' },
      { property: 'og:description', content: 'JavaScript wizard, chaotic good' },
      { property: 'og:image', content: 'https://www.nikolajjsj.com/_nuxt/img/headshot.305395e.jpg' },
      { property: 'og:url', content: 'https://nikolajjsj.com' },
      { property: 'og:type', content: 'website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
