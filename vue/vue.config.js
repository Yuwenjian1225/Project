const { defineConfig } = require("@vue/cli-service");
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const title = "vue";
//地址部署
const url = "http://localhost:8080/";
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()],
  }

});



