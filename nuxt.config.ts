// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
    srcDir: 'src/',
    buildModules: ['@nuxt/typescript-build', '@nuxtjs/google-fonts', ],
    modules: ['nuxt-icon',],
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },
    runtimeConfig: {
      public: {
        API_BASE_URL: 'https://blog-api-zo90.onrender.com/'
      }
    },
    app: {
       head: {
        script: [
        ],
       }
    }
}
