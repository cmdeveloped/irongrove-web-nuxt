module.exports = {
  css: {
    loaderOptions: {
      scss: {
        data: `@import "@/assets/scss/variables.scss";`
      }
    }
  },
  publicPath: process.env.NODE_ENV === "production" ? "/irongrove/" : "/"
};
