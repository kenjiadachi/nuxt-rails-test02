
require('dotenv').config();
const { BASE_URL, FB_API_KEY, FB_AUTH_DOMAIN, FB_DB_URL, FB_PJ_ID, FB_STORAGE_BACKET, FB_MESSAGING_SENDER_ID, FB_APP_ID, FB_MEASUREMENT_ID } = process.env;

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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    'plugins/axios'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true
  },
  proxy: {
    '/api/': { target: 'http://back:3000', pathRewrite: { '^/api/': '/' } }
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config: any, ctx: any) {
    }
  },
  env: {
    BASE_URL,
    FB_API_KEY,
    FB_AUTH_DOMAIN,
    FB_DB_URL,
    FB_PJ_ID,
    FB_STORAGE_BACKET,
    FB_MESSAGING_SENDER_ID,
    FB_APP_ID,
    FB_MEASUREMENT_ID
  },
  watchers: {
    webpack: {
      poll: true
    }
  },
  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true
  }
}
