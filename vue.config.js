module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/FoodPenguin/" : "/",

  pluginOptions: {
    vuetify: {},
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },

  transpileDependencies: [
    'quasar'
  ]
};
