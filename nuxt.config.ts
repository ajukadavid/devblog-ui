// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
    srcDir: 'src/',
    buildModules: ['@nuxt/typescript-build', '@nuxtjs/google-fonts'],
    modules: ['nuxt-icon'],
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },

}
