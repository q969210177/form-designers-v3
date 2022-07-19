const APP_NAME = require("./package.json").name;
const path = require("path");
module.exports = {
  publicPath: "./",
  outputDir: APP_NAME,
  assetsDir: "static",
  filenameHashing: true,
  devServer: {
    hot: true,
    disableHostCheck: true,
    port: 10001,
    overlay: {
      warnings: false,
      errors: true,
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  // 自定义webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    output: {
      // 把子应用打包成 umd 库格式
      library: `${APP_NAME}-[name]`,
      libraryTarget: "umd",
      jsonpFunction: `webpackJsonp_${APP_NAME}`,
    },
  },
};
