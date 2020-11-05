const path = require("path")

module.exports = {
  stories: ["../src/**/*.stories.@(mdx|js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-knobs",
    "@storybook/addon-links",
    "@storybook/addon-storysource"
  ],
  webpackFinal: async base => {
    base.resolve.modules = [path.resolve(__dirname, ".."), "node_modules"]
    base.resolve.alias = {
      ...base.resolve.alias,
      "@": path.resolve(__dirname, "..", "src")
    }
    base.module.rules.push({
      test: /\.ya?ml$/,
      type: "json",
      use: "yaml-loader"
    })
    return base
  }
}
