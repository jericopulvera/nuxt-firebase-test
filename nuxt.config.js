'use strict'

const resolve = require('path').resolve
const path = require('path')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:/]+/g) || []
  }
}

module.exports = {
  mode: 'spa',
  /**
  * Headers of the page
  */
  head: {
    title: 'Jerico Pulvera',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Fullstack Web Developer.'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon.ico'
      }
    ]
  },
  /**
  * Build
  */
  build: {
    extractCSS: true,
    postcss: [
      require('tailwindcss')('./tailwind.js'),
      require('autoprefixer')
    ],
    extend(config, { isDev }) {
      if (!isDev) {
        config.plugins.push(
          new PurgecssPlugin({
            // purgecss configuration
            // https://github.com/FullHuman/purgecss
            paths: glob.sync([
              path.join(__dirname, 'pages/**/*.vue'),
              path.join(__dirname, 'layouts/**/*.vue'),
              path.join(__dirname, 'components/**/*.vue')
            ]),
            extractors: [
              {
                extractor: TailwindExtractor,
                extensions: ['vue']
              }
            ],
            whitelist: ['html', 'body', 'nuxt-progress']
          })
        )
      }
    }
  },
  /**
  * Global CSS
  */
  css: [
    { src: 'font-awesome/css/font-awesome.css' },
    { src: '~assets/css/tailwind.scss', lang: 'scss' }
  ],
  /**
  * Customize the progress-bar color
  */
  loading: { color: '#744d82' },
  /**
   * Plugins 
   */
  plugins: [
    // ssr: false to only include it on client-side
    { src: '~/plugins/netlify-identity.js', ssr: false },
    { src: '~/plugins/firebase.js', ssr: false }
  ],
  /**
  * Modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  /**
   * Axios Config
   */
  axios: {
    // proxyHeaders: false
  }
}