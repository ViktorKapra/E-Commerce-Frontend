/* eslint-disable @typescript-eslint/no-require-imports */
const { merge } = require("webpack-merge");

const common = require("./webpack.common");

module.exports = (env, argv) => {
  const commonConfig = common(env, argv);

  /** @type {import('webpack').Configuration} */
  const extendedConfig = {
    mode: "development",
    devtool: "eval-cheap-module-source-map", // option controls how source maps are generated (affects on build speed dramatically): https://v4.webpack.js.org/configuration/devtool/
    devServer: {
      client: {
        overlay: false,
      },
    },
  };

  return merge(commonConfig, extendedConfig);
};
