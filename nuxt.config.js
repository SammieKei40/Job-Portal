export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'job',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel:"stylesheet", href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css", integrity:"sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==", crossorigin:"anonymous", referrerpolicy:"no-referrer"}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/myjobmag', '~/assets/css/responsive' 
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/sw.client.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/pwa'
  ],


  pwa: {
    meta: {
      theme_color: '#f63'
    },
    manifest: {
      name: 'Job Portal',
      short_name: 'Job Portal',
      lang: 'en',
      orientation: "portrait-primary",
      background_color: "#f63",
      display: 'standalone',
      theme_color: '#f63',
      start_url: "/?standalone",
    },
  },

  workbox: {
    importScripts: [
        'custom-sw.js'
    ],
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',

    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyAJj7Ssk93BUamacKySuXu9xO7ywmCosW0",
  authDomain: "job-portal-ccf02.firebaseapp.com",
  projectId: "job-portal-ccf02",
  storageBucket: "job-portal-ccf02.appspot.com",
  messagingSenderId: "1017439502732",
  appId: "1:1017439502732:web:1928f8085cba65c67416a9"
        },
        services: {
          auth: true // Just as example. Can be any other service.
        }
      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
