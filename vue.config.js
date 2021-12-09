module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://xiaoit.top"
      },
    }
  }
}