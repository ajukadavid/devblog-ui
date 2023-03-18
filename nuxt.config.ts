// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
    srcDir: 'src/',
    buildModules: ['@nuxt/typescript-build', '@nuxtjs/google-fonts', ],
    modules: ['nuxt-icon', '@nuxtjs/cloudinary'],
    cloudinary: {
      options: {
        cloudName: 'ddg2lkmjk',
      },
      
    },
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
    }
}
