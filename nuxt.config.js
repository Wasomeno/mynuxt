import authenticated from "./middleware/authenticated";

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  router: {
  middleware: ["authenticated"],
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
    '@nuxtjs/toast',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyAFr6sj-9W9Encisjklbx7f0at40i50EE0",
          authDomain: "my-nuxt-11393.firebaseapp.com",
          databaseURL: "https://my-nuxt-11393.firebaseio.com",
          projectId: "my-nuxt-11393",
          storageBucket: "my-nuxt-11393.appspot.com",
          messagingSenderId: "618849559678",
          appId: "1:618849559678:web:7847155b4b23e4f34ba42f",
          measurementId: "G-0DD4N8J8T4"
        },
        services: {
          auth: {
            persistence: 'local',
            initialize: {
              onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
            }
          }
        }
      }
    ]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    "baseURL" : "http://localhost:3000/api"
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

  pwa: {
    workbox: {
      "cacheNames" : "QUA",
      "preCaching" : [
       { url : "/" },
       { url : "/menus" }
      ]
    },

    manifest: {
    "name": "QUA Recipes",
    "short_name": "QUA",
    "theme_color": "#ffffff",
    "background_color": "#2196f3",
    "display": "standalone",
    "Scope": "/",
    "start_url": "/",
    },

    firebase: {
      config: {
        apiKey: "AIzaSyAFr6sj-9W9Encisjklbx7f0at40i50EE0",
        authDomain: "my-nuxt-11393.firebaseapp.com",
        databaseURL: "https://my-nuxt-11393.firebaseio.com",
        projectId: "my-nuxt-11393",
        storageBucket: "my-nuxt-11393.appspot.com",
        messagingSenderId: "618849559678",
        appId: "1:618849559678:web:7847155b4b23e4f34ba42f",
        measurementId: "G-0DD4N8J8T4"
      },
      services: {
        auth: true // Just as example. Can be any other service.
      }
    }
    

    }
  }
