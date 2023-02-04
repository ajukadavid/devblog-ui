// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
    buildModules: ['@nuxt/typescript-build'],
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },
}
