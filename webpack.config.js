const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

if(process.env.NODE_ENV === 'production') {
  module.exports = {
    plugins: [new BundleAnalyzerPlugin()],
    externals: {
      vue: 'Vue',
      vuex: 'Vuex',
      'vue-router': 'vuex-router',
      axios: 'axios',
    }
  }
} else {
  module.exports = {}
}