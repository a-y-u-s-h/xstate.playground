const constants = require("next/constants")

module.exports = (phase, options) => {
  /*
    ======================================
      Here you can return different config
      files based on different phases of
      next.js build process. And you can
      add plugins to include additional features.
    ======================================
  */

  return {
    ...options.defaultConfig,
    webpack: config => {
      /*
        ======================================
          This piece of config adds YAML loader
          to the webpack config of next.js.
        ======================================
      */
      config.module.rules.push({
        test: /\.ya?ml$/,
        use: "js-yaml-loader"
      })
      return config
    }
  }
}
