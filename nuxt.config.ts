// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
    srcDir: 'src/',
    buildModules: ['@nuxt/typescript-build', '@nuxtjs/google-fonts', ],
    modules: ['nuxt-icon', '@nuxtjs/google-fonts',  ],
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },
    googleFonts: {
      families: {
        Kanit: true,
        Roboto: true,
        Montserrat: true,
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
