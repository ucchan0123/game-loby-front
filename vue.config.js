module.exports = {
  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 3000
  },

  pluginOptions: {
    i18n: {
      locale: 'ja',
      fallbackLocale: 'ja',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true
    }
  }
}
