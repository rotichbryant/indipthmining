const path = require('path');

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  nitro: {
    output: {
      publicDir: path.join(__dirname, 'dist')
    }
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }
  ],

  modules: [
      [
        'nuxt-mail',
        {
          message: {
            to: 'foo@bar.de',
          },
          smtp: {
            host: "smtp.example.com",
            port: 587,
          },
        }
    ]
  ]
})